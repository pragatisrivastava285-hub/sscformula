import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import { getChapterById } from '../utils/dataLoader';

const ChapterPage = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const chapter = getChapterById(chapterId);

  if (!chapter) {
    return (
      <Layout>
        <div style={{ padding: 'var(--spacing-2xl)', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-lg)' }}>Chapter not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            Go Home
          </button>
        </div>
      </Layout>
    );
  }

  const openFormula = (index) => {
    navigate(`/chapter/${chapterId}/formula/${index}`);
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

  const getTagColor = (tagName) => {
    const tagMap = {
      'Most Asked': 'tag-orange',
      'Important': 'tag-blue',
      'Foundation': 'tag-green',
      'Trick': 'tag-purple',
      'Shortcut': 'tag-yellow',
      'Must Know': 'tag-red',
      'Must Memorize': 'tag-purple',
      'SSC Favourite': 'tag-orange'
    };
    return tagMap[tagName] || 'tag-blue';
  };

  return (
    <Layout>
      <Header />
      
      {/* Hero Section */}
      <section className="hero" style={{
        background: isDark ? 'var(--bg-secondary)' : 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-primary)',
        padding: 'var(--spacing-3xl) var(--spacing-lg)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onClick={() => navigate('/')}
            className="btn btn-secondary"
            style={{
              marginBottom: 'var(--spacing-xl)',
              background: 'transparent',
              border: '2px solid var(--border-primary)',
              color: 'var(--text-primary)'
            }}
          >
            ← Back to Chapters
          </motion.button>
          
          {/* Chapter Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontSize: '4rem',
              marginBottom: 'var(--spacing-lg)',
              color: getChapterColor(chapter.color)
            }}
          >
            {chapter.icon}
          </motion.div>
          
          {/* Chapter Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-title"
            style={{ marginBottom: 'var(--spacing-md)' }}
          >
            {chapter.name}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hero-subtitle"
            style={{ marginBottom: 'var(--spacing-xl)' }}
          >
            {chapter.formulas.length} Formulas • Master the essentials
          </motion.p>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--spacing-xl)',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                color: getChapterColor(chapter.color),
                textTransform: 'uppercase',
                letterSpacing: '-0.02em'
              }}>
                {chapter.formulas.length}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontFamily: 'var(--font-heading)',
                marginTop: 'var(--spacing-xs)'
              }}>
                Formulas
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Info Section */}
      <section style={{ 
        padding: 'var(--spacing-xl) var(--spacing-lg)',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)',
            display: 'flex',
            gap: 'var(--spacing-md)',
            alignItems: 'flex-start'
          }}
        >
          <span style={{ fontSize: '1.5rem', color: getChapterColor(chapter.color) }}>💡</span>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 'var(--spacing-sm)',
              color: 'var(--text-primary)'
            }}>
              How to use this chapter
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              Tap any formula below to see the complete equation, variable explanations, and step-by-step solved examples. 
              Each formula is designed to help you master the concepts quickly.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Formulas List */}
      <section style={{ 
        padding: 'var(--spacing-lg) var(--spacing-lg) var(--spacing-2xl)',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {chapter.formulas.map((formula, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            whileHover={{ x: 8 }}
            onClick={() => openFormula(index)}
            style={{
              cursor: 'pointer',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--spacing-md)',
              transition: 'all var(--transition-normal)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Index Number */}
            <div style={{
              background: getChapterColor(chapter.color),
              color: 'white',
              fontWeight: 600,
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              flexShrink: 0,
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {index + 1}
            </div>
            
            {/* Formula Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 'var(--spacing-xs)',
                color: 'var(--text-primary)',
                lineHeight: 1.2
              }}>
                {formula.name}
              </h3>
              <span className={`tag ${getTagColor(formula.tag)}`}>
                {formula.tag}
              </span>
            </div>
            
            {/* Arrow */}
            <div style={{
              color: getChapterColor(chapter.color),
              fontSize: '1.5rem',
              flexShrink: 0,
              transition: 'transform var(--transition-fast)'
            }}>
              →
            </div>
          </motion.div>
        ))}
      </section>
    </Layout>
  );
};

export default ChapterPage;
