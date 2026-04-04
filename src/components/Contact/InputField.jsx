const InputField = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
}) => (
  <div className="input-group">
    {label && (
      <label htmlFor={id} className="input-label">
        {label}
      </label>
    )}
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="input-field"
      autoComplete="off"
    />
  </div>
);

export default InputField;
