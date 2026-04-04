import { useState, useRef } from 'react';
import InputField from './InputField';
import CTAButton from '../Navbar/CTAButton';

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
  VALIDATION_ERROR: 'validation_error',
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState(STATUS.IDLE);
  const clearTouchedTimer = useRef(null);

  // ── Auto-clear the yellow highlight after 1s ──────
  const flashErrors = (fields) => {
    setTouched(fields);
    // Clear any previous timer
    if (clearTouchedTimer.current) clearTimeout(clearTouchedTimer.current);
    clearTouchedTimer.current = setTimeout(() => {
      setTouched({ name: false, email: false, message: false });
      setStatus(STATUS.IDLE);
    }, 1000); // ← 1 second then vanish
  };

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameEmpty    = !formData.name.trim();
    const isEmailEmpty   = !formData.email.trim();
    const isEmailInvalid = !isEmailValid(formData.email);
    const isMessageEmpty = !formData.message.trim();

    // ── Block API & flash yellow highlight for 1s ──
    if (isNameEmpty || isEmailEmpty || isEmailInvalid || isMessageEmpty) {
      setStatus(STATUS.VALIDATION_ERROR);
      flashErrors({
        name:    isNameEmpty,
        email:   isEmailEmpty || isEmailInvalid,
        message: isMessageEmpty,
      });
      return; // ← API blocked
    }

    // ── All valid → send to Web3Forms ─────────────
    setStatus(STATUS.LOADING);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name:    formData.name,
          email:   formData.email,
          message: formData.message,
          subject: `New Contact Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus(STATUS.SUCCESS);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(STATUS.IDLE), 5000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      setStatus(STATUS.ERROR);
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>

      {/* ─── Row: Name + Email ──────────────── */}
      <div className="contact-form__row">

        <div className="input-group">
          <label htmlFor="name" className="input-label">YOUR NAME</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange('name')}
            className={`input-field${touched.name ? ' input-field--warn' : ''}`}
            autoComplete="off"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email" className="input-label">EMAIL ADDRESS</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange('email')}
            className={`input-field${touched.email ? ' input-field--warn' : ''}`}
            autoComplete="off"
          />
        </div>

      </div>

      {/* ─── Message Textarea ─────────────── */}
      <div className="input-group">
        <label htmlFor="message" className="input-label">YOUR MESSAGE</label>
        <textarea
          id="message"
          placeholder="Write something...."
          value={formData.message}
          onChange={handleChange('message')}
          className={`input-field input-field--textarea${touched.message ? ' input-field--warn' : ''}`}
          rows={7}
        />
      </div>

      {/* ─── Submit Button ─────────────────── */}
      <div className="contact-form__footer">
        <CTAButton
          label={status === STATUS.LOADING ? 'Sending...' : 'Submit'}
          type="submit"
          variant="dark"
          className="submit-btn"
        />
      </div>

      {/* ─── Status Banners ───────────────── */}
      {status === STATUS.VALIDATION_ERROR && (
        <p className="form-status form-status--warning">
          ⚠️ Please fill all fields before submitting.
        </p>
      )}
      {status === STATUS.SUCCESS && (
        <p className="form-status form-status--success">
          ✅ Message sent! We'll get back to you soon.
        </p>
      )}
      {status === STATUS.ERROR && (
        <p className="form-status form-status--error">
          ❌ Something went wrong. Please try again.
        </p>
      )}

    </form>
  );
};

export default ContactForm;
