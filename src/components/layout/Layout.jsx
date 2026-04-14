import React from 'react';
import { theme } from '../../styles/theme';

const Layout = ({ children, style = {} }) => {
  const layoutStyles = {
    minHeight: '100vh',
    background: theme.colors.background,
    fontFamily: theme.typography.fontFamily.sans,
    color: theme.colors.text,
    overflowX: 'hidden',
    ...style,
  };

  return (
    <div style={layoutStyles}>
      {children}
    </div>
  );
};

export default Layout;
