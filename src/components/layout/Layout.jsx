import React from 'react';

const Layout = ({ children, style = {} }) => {
  const layoutStyles = {
    minHeight: '100vh',
    background: 'var(--bg-primary)',
    fontFamily: 'var(--font-body)',
    color: 'var(--text-primary)',
    overflowX: 'hidden',
    transition: 'background-color var(--transition-normal), color var(--transition-normal)',
    ...style,
  };

  return (
    <div style={layoutStyles}>
      {children}
    </div>
  );
};

export default Layout;
