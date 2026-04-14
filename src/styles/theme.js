export const theme = {
  colors: {
    background: "#050a14",
    surface: "#0f1e35",
    surfaceDark: "#0a1628",
    border: "#1e3a5f",
    text: "#e2e8f0",
    textSecondary: "#94a3b8",
    textMuted: "#64748b",
    textDim: "#475569",
    primary: "#f97316",
    success: "#4ade80",
    error: "#ef4444",
    warning: "#f59e0b",
    info: "#3b82f6",
  },
  
  tagColors: {
    "Foundation": "#1e3a5f",
    "Most Asked": "#7c2d12", 
    "Important": "#14532d",
    "Trick": "#4a1d96",
    "Shortcut": "#1e3a5f",
    "Must Know": "#7c2d12",
    "Must Memorize": "#4a1d96",
    "SSC Favourite": "#7c2d12",
  },
  
  tagText: {
    "Foundation": "#93c5fd",
    "Most Asked": "#fca5a5",
    "Important": "#86efac", 
    "Trick": "#c4b5fd",
    "Shortcut": "#93c5fd",
    "Must Know": "#fca5a5",
    "Must Memorize": "#c4b5fd",
    "SSC Favourite": "#fca5a5",
  },

  gradients: {
    primary: "linear-gradient(160deg,#0f1e35 0%,#0a0e1a 60%)",
    card: "linear-gradient(145deg,#0f1e35,#0a1628)",
    cardHover: "linear-gradient(135deg,#0f1e35,#0a1628)",
    formula: "linear-gradient(145deg,#0f1e35 0%,#0a1628 100%)",
  },

  shadows: {
    card: "0 4px 20px rgba(0,0,0,0.3)",
    cardHover: "0 12px 40px rgba(0,0,0,0.5)",
    button: "0 2px 8px rgba(0,0,0,0.2)",
  },

  borderRadius: {
    small: "8px",
    medium: "12px", 
    large: "18px",
    xl: "22px",
    full: "99px",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    xxl: "24px",
    xxxl: "28px",
  },

  typography: {
    fontFamily: {
      sans: "'Segoe UI', system-ui, sans-serif",
      display: "'Baloo 2', sans-serif",
      body: "'Nunito', sans-serif",
      mono: "'Courier New', monospace",
    },
    fontSize: {
      xs: "0.7rem",
      sm: "0.75rem", 
      base: "0.88rem",
      lg: "0.95rem",
      xl: "1.05rem",
      "2xl": "1.3rem",
      "3xl": "clamp(2.4rem,8vw,3.4rem)",
    },
    fontWeight: {
      normal: "400",
      medium: "600",
      semibold: "700",
      bold: "800",
    },
    lineHeight: {
      tight: "1.1",
      normal: "1.5",
      relaxed: "1.6",
      loose: "2.0",
    },
  },
};

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap');
  
  * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
  }
  
  body {
    font-family: ${theme.typography.fontFamily.sans};
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: ${theme.typography.lineHeight.normal};
  }

  .ch-card:hover { 
    transform: translateY(-5px) !important; 
    box-shadow: ${theme.shadows.cardHover} !important; 
  }
  
  .fitem:hover { 
    transform: translateX(6px) !important; 
  }
  
  .nb:hover:not(:disabled) { 
    background: ${theme.colors.primary} !important; 
    color: ${theme.colors.background} !important; 
    border-color: ${theme.colors.primary} !important; 
  }
  
  ::-webkit-scrollbar{ 
    width: 6px; 
  } 
  ::-webkit-scrollbar-track{ 
    background: ${theme.colors.surfaceDark}; 
  }
  ::-webkit-scrollbar-thumb{ 
    background: ${theme.colors.border}; 
    border-radius: 3px; 
  }
  
  .tag{
    display: inline-block;
    border-radius: ${theme.borderRadius.full};
    font-size: ${theme.typography.fontSize.xs};
    padding: 2px 10px;
    font-weight: ${theme.typography.fontWeight.semibold};
    letter-spacing: 0.3px;
  }
  
  input:focus { 
    border-color: ${theme.colors.primary} !important; 
    outline: none; 
  }
  
  .scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
    border: none;
    border-radius: ${theme.borderRadius.full};
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: ${theme.shadows.button};
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .scroll-to-top:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.cardHover};
  }
`;
