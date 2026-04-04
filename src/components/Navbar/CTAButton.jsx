const CTAButton = ({
  label = 'Get Started',
  onClick,
  type = 'button',
  variant = 'dark',
  className = '',
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`cta-btn cta-btn--${variant} ${className}`.trim()}
  >
    {label}
  </button>
);

export default CTAButton;
