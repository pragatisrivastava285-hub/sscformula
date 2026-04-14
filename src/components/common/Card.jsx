import React from 'react';
import { theme } from '../../styles/theme';

const Card = ({ 
  children, 
  hover = false, 
  padding = 'lg',
  background = 'surface',
  border = true,
  style = {},
  className = '',
  onClick,
  ...props 
}) => {
  const getCardStyles = () => {
    const baseStyles = {
      borderRadius: theme.borderRadius.large,
      transition: 'all 0.22s ease',
      position: 'relative',
      overflow: 'hidden',
    };

    const backgroundStyles = {
      surface: {
        background: theme.gradients.card,
      },
      surfaceDark: {
        background: theme.colors.surfaceDark,
      },
      formula: {
        background: theme.gradients.formula,
      },
    };

    const paddingStyles = {
      none: { padding: 0 },
      sm: { padding: theme.spacing.sm },
      md: { padding: theme.spacing.md },
      lg: { padding: theme.spacing.lg },
      xl: { padding: theme.spacing.xl },
      xxl: { padding: theme.spacing.xxl },
    };

    const borderStyles = border ? {
      border: `1.5px solid ${theme.colors.border}`,
    } : {};

    const hoverStyles = hover ? {
      cursor: onClick ? 'pointer' : 'default',
    } : {};

    return {
      ...baseStyles,
      ...backgroundStyles[background],
      ...paddingStyles[padding],
      ...borderStyles,
      ...hoverStyles,
      ...style,
    };
  };

  return (
    <div
      className={`${hover ? 'ch-card' : ''} ${className}`}
      style={getCardStyles()}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
