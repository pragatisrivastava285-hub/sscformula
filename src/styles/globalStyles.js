export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
  
  * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-body);
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    transition: background-color var(--transition-normal), color var(--transition-normal);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Typography base styles */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    transition: color var(--transition-normal);
  }

  h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.03em;
  }

  h2 {
    font-size: clamp(2rem, 6vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
  }

  h3 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 600;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    transition: color var(--transition-normal);
  }

  /* Button base styles */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-md) var(--spacing-xl);
    font-family: var(--font-heading);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: none;
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: all var(--transition-fast);
    text-decoration: none;
    position: relative;
    overflow: hidden;
  }

  .btn-primary {
    background: var(--text-primary);
    color: var(--text-inverse);
    box-shadow: var(--shadow-md);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--text-primary);
  }

  .btn-secondary:hover {
    background: var(--text-primary);
    color: var(--text-inverse);
  }

  /* Card styles */
  .card {
    background: var(--bg-card);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition-normal);
  }

  .card:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: var(--shadow-xl);
  }

  /* Input styles */
  input, textarea {
    font-family: var(--font-body);
    font-size: 1rem;
    padding: var(--spacing-md);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-md);
    background: var(--bg-surface);
    color: var(--text-primary);
    transition: all var(--transition-fast);
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: var(--border-focus);
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }

  /* Formula text styling */
  .formula-text {
    font-family: var(--font-mono);
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--text-primary);
    background: var(--bg-surface);
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-primary);
    text-align: center;
    letter-spacing: 0.05em;
  }

  /* Tag styles */
  .tag {
    display: inline-block;
    padding: var(--spacing-xs) var(--spacing-md);
    font-family: var(--font-heading);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: var(--radius-full);
    background: var(--bg-surface);
    color: var(--text-secondary);
    border: 1px solid var(--border-primary);
  }

  .tag-orange { background: var(--accent-orange); color: white; }
  .tag-green { background: var(--accent-green); color: white; }
  .tag-blue { background: var(--accent-blue); color: white; }
  .tag-purple { background: var(--accent-purple); color: white; }
  .tag-red { background: var(--accent-red); color: white; }
  .tag-yellow { background: var(--accent-yellow); color: white; }

  /* Header styles */
  .header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: var(--bg-primary);
    border-bottom: 1px solid var(--border-primary);
    backdrop-filter: blur(10px);
    transition: all var(--transition-normal);
  }

  .header-scrolled {
    box-shadow: var(--shadow-md);
  }

  /* Navigation styles */
  .nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-family: var(--font-heading);
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
  }

  .nav-link:hover {
    color: var(--text-primary);
    background: var(--bg-surface);
  }

  .nav-link.active {
    color: var(--text-primary);
    background: var(--bg-surface);
  }

  /* Premium navbar icon buttons */
  .nav-icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: var(--radius-full);
    background: transparent;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    transition: all var(--transition-fast);
    position: relative;
    outline: none;
  }

  .nav-icon-btn:hover {
    background: var(--bg-surface);
    transform: scale(1.05);
    box-shadow: var(--shadow-sm);
  }

  .nav-icon-btn:active {
    transform: scale(0.95);
  }

  .nav-icon-btn:focus-visible {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
  }

  .nav-icon-btn svg {
    width: 20px;
    height: 20px;
    stroke-width: 2;
    transition: all var(--transition-fast);
  }

  .nav-icon-btn:hover svg {
    stroke-width: 2.5;
  }

  /* Grid layouts */
  .grid {
    display: grid;
    gap: var(--spacing-lg);
  }

  .grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
  .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

  @media (min-width: 768px) {
    .grid-cols-md-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-cols-md-3 { grid-template-columns: repeat(3, 1fr); }
    .grid-cols-md-4 { grid-template-columns: repeat(4, 1fr); }
  }

  @media (min-width: 1024px) {
    .grid-cols-lg-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-cols-lg-3 { grid-template-columns: repeat(3, 1fr); }
    .grid-cols-lg-4 { grid-template-columns: repeat(4, 1fr); }
  }

  /* Responsive design for FormulaPage */
  @media (max-width: 768px) {
    .formula-page-grid {
      grid-template-columns: 1fr !important;
      gap: var(--spacing-lg) !important;
    }
    
    .formula-sticky {
      position: static !important;
    }
    
    .formula-text {
      font-size: 1.25rem !important;
      padding: var(--spacing-lg) !important;
    }
    
    .hero-title {
      font-size: clamp(2rem, 8vw, 3rem) !important;
    }
    
    .product-card {
      padding: var(--spacing-lg) !important;
    }
    
    .product-card-icon {
      font-size: 2rem !important;
    }
  }

  /* Responsive navigation */
  @media (max-width: 640px) {
    .header {
      padding: var(--spacing-md) !important;
    }
    
    .header .flex {
      gap: var(--spacing-sm) !important;
    }
    
    .nav-link {
      padding: var(--spacing-xs) var(--spacing-sm) !important;
      font-size: 0.75rem !important;
    }

    .nav-icon-btn {
      width: 40px !important;
      height: 40px !important;
    }

    .nav-icon-btn svg {
      width: 18px !important;
      height: 18px !important;
    }
  }

  /* Responsive search modal */
  @media (max-width: 640px) {
    .search-modal {
      padding: var(--spacing-md) !important;
    }
    
    .search-input {
      font-size: 1rem !important;
      padding: var(--spacing-md) !important;
    }
  }

  /* Flex utilities */
  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .items-center { align-items: center; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .gap-sm { gap: var(--spacing-sm); }
  .gap-md { gap: var(--spacing-md); }
  .gap-lg { gap: var(--spacing-lg); }

  /* Spacing utilities */
  .p-sm { padding: var(--spacing-sm); }
  .p-md { padding: var(--spacing-md); }
  .p-lg { padding: var(--spacing-lg); }
  .p-xl { padding: var(--spacing-xl); }
  
  .m-sm { margin: var(--spacing-sm); }
  .m-md { margin: var(--spacing-md); }
  .m-lg { margin: var(--spacing-lg); }
  .m-xl { margin: var(--spacing-xl); }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--border-primary);
    border-radius: var(--radius-full);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--text-muted);
  }

  /* Loading animation */
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  
  .skeleton {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    background: var(--bg-secondary);
    border-radius: var(--radius-md);
  }

  /* Page transitions */
  .page-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .page-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s ease;
  }
  
  .page-exit {
    opacity: 1;
    transform: translateY(0);
  }
  
  .page-exit-active {
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s ease;
  }

  /* Hero section styles */
  .hero {
    padding: var(--spacing-3xl) var(--spacing-lg);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero-title {
    font-size: clamp(3rem, 10vw, 6rem);
    font-weight: 700;
    line-height: 0.9;
    margin-bottom: var(--spacing-lg);
    text-transform: uppercase;
    letter-spacing: -0.05em;
  }

  .hero-subtitle {
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-2xl);
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0;
  }

  /* Product card styles */
  .product-card {
    background: var(--bg-card);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-lg);
    padding: var(--spacing-2xl);
    text-align: center;
    cursor: pointer;
    transition: all var(--transition-normal);
    position: relative;
    overflow: hidden;
  }

  .product-card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: var(--shadow-xl);
    border-color: var(--border-focus);
  }

  .product-card-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-lg);
    transition: all var(--transition-normal);
    filter: grayscale(1);
    opacity: 0.7;
  }

  .product-card:hover .product-card-icon {
    filter: grayscale(0);
    opacity: 1;
    transform: scale(1.1);
  }

  .product-card-title {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
  }

  .product-card-price {
    font-family: var(--font-heading);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .product-card-hover-text {
    position: absolute;
    bottom: -30px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: var(--font-heading);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-primary);
    transition: bottom var(--transition-normal);
  }

  .product-card:hover .product-card-hover-text {
    bottom: var(--spacing-md);
  }

  /* Search modal styles */
  .search-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    border-bottom: 1px solid var(--border-primary);
    padding: var(--spacing-lg);
    z-index: 100;
    transform: translateY(-100%);
    transition: transform var(--transition-normal);
  }

  .search-modal.open {
    transform: translateY(0);
  }

  .search-input {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: block;
    font-size: 1.25rem;
    padding: var(--spacing-lg);
    border: 2px solid var(--border-primary);
    border-radius: var(--radius-lg);
    background: var(--bg-surface);
    color: var(--text-primary);
    font-family: var(--font-heading);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .search-input:focus {
    border-color: var(--border-focus);
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
  }
`;
