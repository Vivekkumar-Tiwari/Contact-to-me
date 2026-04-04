const NavItem = ({ label, active = false, hasDropdown = false, href = '#' }) => (
  <li className={`nav-item${active ? ' nav-item--active' : ''}`}>
    <a href={href} className="nav-link">
      {label}
      {hasDropdown && (
        <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="nav-chevron">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </a>
  </li>
);

export default NavItem;
