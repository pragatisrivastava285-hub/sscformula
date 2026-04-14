import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import { searchFormulas, getStatistics } from '../utils/dataLoader';

const HomePage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [search, setSearch] = useState('');
  
  const filteredChapters = searchFormulas(search);
  const stats = getStatistics();

  const openChapter = (chapter) => {
    navigate(`/chapter/${chapter.id}`);
  };

  const getChapterColor = (chapterColor) => {
    const colorMap = {
      '#f97316': 'var(--accent-orange)',
      '#4ade80': 'var(--accent-green)',
      '#3b82f6': 'var(--accent-blue)',
      '#8b5cf6': 'var(--accent-purple)',
      '#ef4444': 'var(--accent-red)',
      '#f59e0b': 'var(--accent-yellow)'
    };
    return colorMap[chapterColor] || 'var(--accent-orange)';
  };

  return (
    <Layout>
      <Header />
      
      {/* Hero Section */}
      <section className="hero" style={{
        background: isDark ? 'var(--bg-secondary)' : 'var(--bg-primary)',
        borderBottom: `1px solid var(--border-primary)`,
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ textAlign: 'center', maxWidth: '1200px', padding: '0 var(--spacing-lg)' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--spacing-sm) var(--spacing-lg)',
              marginBottom: 'var(--spacing-xl)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-secondary)'
            }}
          >
            SSC CGL · CHSL · MTS · CPO
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hero-title"
          >
            <span style={{ color: 'var(--accent-orange)' }}>PRAG</span>
            <br />
            <span style={{ color: 'var(--text-primary)' }}>SSC</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hero-subtitle"
          >
            Your pocket mentor for formulas
          </motion.p>
          
          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-lg)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: 'var(--spacing-xl)'
          }}>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              style={{
                fontSize: '1rem',
                padding: 'var(--spacing-lg) var(--spacing-2xl)',
                background: 'var(--text-primary)',
                color: 'var(--text-inverse)',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() => {
                const firstChapter = filteredChapters[0];
                if (firstChapter) openChapter(firstChapter);
              }}
            >
              Start Learning
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
              style={{
                fontSize: '1rem',
                padding: 'var(--spacing-lg) var(--spacing-2xl)',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/quick-tricks')}
            >
              Quick Tricks
            </motion.button>
          </div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--spacing-2xl)',
              marginTop: 'var(--spacing-2xl)',
              flexWrap: 'wrap'
            }}
          >
            {[
              [stats.chapters, 'Chapters'],
              [stats.formulas, 'Formulas'],
              [stats.examples, 'Examples']
            ].map(([count, label], index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: ['var(--accent-orange)', 'var(--accent-blue)', 'var(--accent-green)'][index],
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em'
                }}>
                  {count}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: 'var(--font-heading)',
                  marginTop: 'var(--spacing-xs)'
                }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Search Section */}
      <section style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <input
            type="text"
            placeholder="Search chapters or formulas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: 'var(--spacing-lg)',
              fontSize: '1rem',
              border: '2px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)',
              transition: 'all var(--transition-fast)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--border-focus)';
              e.target.style.boxShadow = '0 0 0 4px rgba(0, 0, 0, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border-primary)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
      </section>

      {/* Results Header */}
      <div style={{
        padding: '0 var(--spacing-lg) var(--spacing-md)',
        color: 'var(--text-muted)',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontFamily: 'var(--font-heading)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {filteredChapters.length} Chapter{filteredChapters.length !== 1 ? 's' : ''}
      </div>

      {/* Chapters Grid */}
      <section style={{ 
        padding: 'var(--spacing-md) var(--spacing-lg) var(--spacing-2xl)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div className="grid grid-cols-2 grid-cols-md-3 grid-cols-lg-4" style={{ gap: 'var(--spacing-lg)' }}>
          {/* Perfect Squares & Cubes Special Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="product-card"
            onClick={() => navigate('/squares-cubes')}
            style={{
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-2xl)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all var(--transition-normal)'
            }}
          >
            <div 
              style={{
                fontSize: '3rem',
                marginBottom: 'var(--spacing-lg)',
                transition: 'all var(--transition-normal)',
              }}
            >
              🔢
            </div>
            <h3 
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: 'var(--spacing-sm)',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Perfect Squares<br/>& Cubes
            </h3>
            <p 
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: '1.4'
              }}
            >
              Complete reference with<br/>practice questions
            </p>
          </motion.div>
          
          {filteredChapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="product-card"
              onClick={() => openChapter(chapter)}
              style={{
                cursor: 'pointer',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-2xl)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all var(--transition-normal)'
              }}
            >
              <div 
                className="product-card-icon"
                style={{
                  fontSize: '3rem',
                  marginBottom: 'var(--spacing-lg)',
                  transition: 'all var(--transition-normal)',
                  filter: 'grayscale(1)',
                  opacity: 0.7,
                  color: getChapterColor(chapter.color)
                }}
              >
                {chapter.icon}
              </div>
              
              <div className="product-card-title" style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--text-primary)'
              }}>
                {chapter.name}
              </div>
              
              <div className="product-card-price" style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {chapter.formulas.length} Formulas
              </div>

              <div className="product-card-hover-text">
                View Chapter →
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: 'var(--spacing-2xl) var(--spacing-lg)',
        color: 'var(--text-muted)',
        fontSize: '0.875rem',
        fontFamily: 'var(--font-body)',
        borderTop: '1px solid var(--border-primary)'
      }}>
        Made with ❤️ for SSC aspirants · <span style={{ 
          color: 'var(--accent-orange)', 
          fontWeight: 600,
          fontFamily: 'var(--font-heading)'
        }}>PragSSC</span>
      </footer>
    </Layout>
  );
};

export default HomePage;
