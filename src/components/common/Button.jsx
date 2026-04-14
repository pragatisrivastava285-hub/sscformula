import React from 'react';
import { theme } from '../../styles/theme';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  fullWidth = false,
  style = {},
  ...props 
}) => {
  const getButtonStyles = () => {
    const baseStyles = {
      fontFamily: theme.typography.fontFamily.body,
      fontWeight: theme.typography.fontWeight.semibold,
      borderRadius: theme.borderRadius.medium,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.18s ease',
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.xs,
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.6 : 1,
    };

    const sizeStyles = {
      small: {
        padding: '8px 12px',
        fontSize: theme.typography.fontSize.sm,
      },
      medium: {
        padding: '13px',
        fontSize: theme.typography.fontSize.base,
      },
      large: {
        padding: '16px 24px',
        fontSize: theme.typography.fontSize.lg,
      },
    };

    const variantStyles = {
      primary: {
        background: theme.colors.primary,
        color: theme.colors.background,
      },
      secondary: {
        background: theme.colors.surface,
        color: theme.colors.text,
        border: `1.5px solid ${theme.colors.border}`,
      },
      ghost: {
        background: 'transparent',
        color: theme.colors.text,
        border: `1.5px solid ${theme.colors.border}`,
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...style,
    };
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={getButtonStyles()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
