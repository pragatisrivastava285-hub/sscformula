import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // Update CSS variables
    const root = document.documentElement;
    const theme = isDark ? darkTheme : lightTheme;
    
    Object.entries(theme.cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const value = {
    isDark,
    toggleTheme,
    theme: isDark ? darkTheme : lightTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Light Theme - Clean white backgrounds, pure black text
const lightTheme = {
  mode: 'light',
  cssVars: {
    // Background colors
    '--bg-primary': '#FFFFFF',
    '--bg-secondary': '#F8F8F8',
    '--bg-surface': '#FFFFFF',
    '--bg-card': '#FFFFFF',
    '--bg-overlay': 'rgba(0, 0, 0, 0.5)',
    
    // Text colors
    '--text-primary': '#111111',
    '--text-secondary': '#666666',
    '--text-muted': '#999999',
    '--text-inverse': '#FFFFFF',
    
    // Border colors
    '--border-primary': '#E5E5E5',
    '--border-secondary': '#F0F0F0',
    '--border-focus': '#111111',
    
    // Accent colors (vibrant chapter colors)
    '--accent-orange': '#FF6B35',
    '--accent-green': '#00C896',
    '--accent-blue': '#0066FF',
    '--accent-purple': '#8B5CF6',
    '--accent-red': '#EF4444',
    '--accent-yellow': '#F59E0B',
    
    // Shadow colors
    '--shadow-sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
    '--shadow-md': '0 4px 20px rgba(0, 0, 0, 0.08)',
    '--shadow-lg': '0 10px 40px rgba(0, 0, 0, 0.12)',
    '--shadow-xl': '0 20px 60px rgba(0, 0, 0, 0.15)',
    
    // Spacing
    '--spacing-xs': '4px',
    '--spacing-sm': '8px',
    '--spacing-md': '16px',
    '--spacing-lg': '24px',
    '--spacing-xl': '32px',
    '--spacing-2xl': '48px',
    '--spacing-3xl': '64px',
    
    // Border radius
    '--radius-sm': '4px',
    '--radius-md': '8px',
    '--radius-lg': '12px',
    '--radius-xl': '16px',
    '--radius-full': '9999px',
    
    // Typography
    '--font-heading': '"Oswald", "Helvetica Now", sans-serif',
    '--font-body': '"Inter", "Roboto", sans-serif',
    '--font-mono': '"JetBrains Mono", "Fira Code", monospace',
    
    // Transitions
    '--transition-fast': '0.15s ease',
    '--transition-normal': '0.3s ease',
    '--transition-slow': '0.5s ease',
  }
};

// Dark Theme - True black backgrounds, white text
const darkTheme = {
  mode: 'dark',
  cssVars: {
    // Background colors
    '--bg-primary': '#0A0A0A',
    '--bg-secondary': '#111111',
    '--bg-surface': '#1D1D1D',
    '--bg-card': '#1D1D1D',
    '--bg-overlay': 'rgba(255, 255, 255, 0.1)',
    
    // Text colors
    '--text-primary': '#FFFFFF',
    '--text-secondary': '#B3B3B3',
    '--text-muted': '#666666',
    '--text-inverse': '#111111',
    
    // Border colors
    '--border-primary': '#2A2A2A',
    '--border-secondary': '#1F1F1F',
    '--border-focus': '#FFFFFF',
    
    // Accent colors (same vibrant colors for consistency)
    '--accent-orange': '#FF6B35',
    '--accent-green': '#00C896',
    '--accent-blue': '#0066FF',
    '--accent-purple': '#8B5CF6',
    '--accent-red': '#EF4444',
    '--accent-yellow': '#F59E0B',
    
    // Shadow colors
    '--shadow-sm': '0 1px 3px rgba(0, 0, 0, 0.3)',
    '--shadow-md': '0 4px 20px rgba(0, 0, 0, 0.4)',
    '--shadow-lg': '0 10px 40px rgba(0, 0, 0, 0.5)',
    '--shadow-xl': '0 20px 60px rgba(0, 0, 0, 0.6)',
    
    // Spacing (same as light)
    '--spacing-xs': '4px',
    '--spacing-sm': '8px',
    '--spacing-md': '16px',
    '--spacing-lg': '24px',
    '--spacing-xl': '32px',
    '--spacing-2xl': '48px',
    '--spacing-3xl': '64px',
    
    // Border radius (same as light)
    '--radius-sm': '4px',
    '--radius-md': '8px',
    '--radius-lg': '12px',
    '--radius-xl': '16px',
    '--radius-full': '9999px',
    
    // Typography (same as light)
    '--font-heading': '"Oswald", "Helvetica Now", sans-serif',
    '--font-body': '"Inter", "Roboto", sans-serif',
    '--font-mono': '"JetBrains Mono", "Fira Code", monospace',
    
    // Transitions (same as light)
    '--transition-fast': '0.15s ease',
    '--transition-normal': '0.3s ease',
    '--transition-slow': '0.5s ease',
  }
};
