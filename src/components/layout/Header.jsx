import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../../styles/theme';
import Button from '../common/Button';

const Header = () => {
  const location = useLocation();
  
  const headerStyles = {
    background: theme.colors.surface,
    borderBottom: `1px solid ${theme.colors.border}`,
    padding: '13px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 20,
  };

  const logoStyles = {
    fontFamily: theme.typography.fontFamily.display,
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    textDecoration: 'none',
    color: theme.colors.text,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs,
  };

  const navStyles = {
    display: 'flex',
    gap: theme.spacing.sm,
    alignItems: 'center',
  };

  const linkStyles = {
    color: theme.colors.textSecondary,
    textDecoration: 'none',
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily.body,
    fontWeight: theme.typography.fontWeight.semibold,
    padding: '8px 12px',
    borderRadius: theme.borderRadius.small,
    transition: 'all 0.2s ease',
  };

  const activeLinkStyles = {
    ...linkStyles,
    background: `${theme.colors.primary}22`,
    color: theme.colors.primary,
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header style={headerStyles}>
      <Link to="/" style={logoStyles}>
        <span style={{ color: theme.colors.primary }}>Prag</span>
        <span>SSC</span>
      </Link>
      
      <nav style={navStyles}>
        <Link 
          to="/" 
          style={isActive('/') ? activeLinkStyles : linkStyles}
        >
          Home
        </Link>
        <Link 
          to="/author" 
          style={isActive('/author') ? activeLinkStyles : linkStyles}
        >
          Author
        </Link>
      </nav>
    </header>
  );
};

export default Header;
