import React from 'react';
import { theme } from '../../styles/theme';

const SearchInput = ({ 
  value, 
  onChange, 
  placeholder = 'Search...',
  style = {},
  ...props 
}) => {
  const getInputStyles = () => ({
    width: '100%',
    background: theme.colors.surface,
    border: `1.5px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.large,
    padding: '13px 16px 13px 42px',
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.lg,
    fontFamily: theme.typography.fontFamily.body,
    transition: 'border 0.2s ease',
    ...style,
  });

  const getContainerStyles = () => ({
    position: 'relative',
  });

  const getIconStyles = () => ({
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1.1rem',
    pointerEvents: 'none',
    color: theme.colors.textSecondary,
  });

  return (
    <div style={getContainerStyles()}>
      <span style={getIconStyles()}>🔍</span>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={getInputStyles()}
        {...props}
      />
    </div>
  );
};

export default SearchInput;
