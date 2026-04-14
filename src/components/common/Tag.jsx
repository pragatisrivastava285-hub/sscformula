import React from 'react';
import { theme } from '../../styles/theme';

const Tag = ({ 
  children, 
  variant = 'default',
  style = {},
  ...props 
}) => {
  const getTagStyles = () => {
    const baseStyles = {
      display: 'inline-block',
      borderRadius: theme.borderRadius.full,
      fontSize: theme.typography.fontSize.xs,
      padding: '2px 10px',
      fontWeight: theme.typography.fontWeight.semibold,
      letterSpacing: '0.3px',
    };

    const variantStyles = {
      default: {
        background: theme.tagColors[children] || theme.colors.border,
        color: theme.tagText[children] || theme.colors.textSecondary,
      },
      primary: {
        background: `${theme.colors.primary}22`,
        color: theme.colors.primary,
        border: `1px solid ${theme.colors.primary}33`,
      },
      success: {
        background: `${theme.colors.success}22`,
        color: theme.colors.success,
        border: `1px solid ${theme.colors.success}33`,
      },
    };

    return {
      ...baseStyles,
      ...variantStyles[variant],
      ...style,
    };
  };

  return (
    <span 
      className="tag"
      style={getTagStyles()}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;
