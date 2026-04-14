import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import { getChapterById, getFormulaById } from '../utils/dataLoader';

const FormulaPage = () => {
  const { chapterId, formulaIndex } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const chapter = getChapterById(chapterId);
  const [currentFormulaIndex, setCurrentFormulaIndex] = useState(parseInt(formulaIndex));
  
  const formula = chapter ? chapter.formulas[currentFormulaIndex] : null;

  if (!chapter || !formula) {
    return (
      <Layout>
        <div style={{ padding: 'var(--spacing-2xl)', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-lg)' }}>Formula not found</h1>
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

  const goBack = () => {
    navigate(`/chapter/${chapterId}`);
  };

  const openFormula = (index) => {
    setCurrentFormulaIndex(index);
    navigate(`/chapter/${chapterId}/formula/${index}`);
    window.scrollTo(0, 0);
  };

  const goToPrevious = () => {
    if (currentFormulaIndex > 0) {
      openFormula(currentFormulaIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentFormulaIndex < chapter.formulas.length - 1) {
      openFormula(currentFormulaIndex + 1);
    }
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
      
      {/* Header */}
      <div style={{
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-primary)',
        padding: 'var(--spacing-lg)',
        position: 'sticky',
        top: 0,
        zIndex: 20,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <button
            onClick={goBack}
            className="btn btn-secondary"
            style={{
              background: 'transparent',
              border: '2px solid var(--border-primary)',
              color: 'var(--text-primary)'
            }}
          >
            ← Back
          </button>
          
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-xs)'
            }}>
              {chapter.icon} {chapter.name}
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Formula {currentFormulaIndex + 1} of {chapter.formulas.length}
            </div>
          </div>
          
          {/* Progress Dots */}
          <div style={{
            display: 'flex',
            gap: '4px',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            maxWidth: '120px'
          }}>
            {chapter.formulas.map((_, index) => (
              <div
                key={index}
                onClick={() => openFormula(index)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: index === currentFormulaIndex ? getChapterColor(chapter.color) : 'var(--border-primary)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="formula-page-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-2xl)',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'var(--spacing-2xl)',
        alignItems: 'start'
      }}>
        
        {/* Left Column - Formula Display */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="formula-sticky"
          style={{
            position: 'sticky',
            top: '120px',
            height: 'fit-content'
          }}
        >
          <div style={{
            background: 'var(--bg-surface)',
            border: '2px solid var(--border-primary)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-2xl)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Glow Effect */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${getChapterColor(chapter.color)}22, transparent 70%)`,
              pointerEvents: 'none'
            }} />
            
            {/* Tag */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <span className={`tag ${getTagColor(formula.tag)}`}>
                {formula.tag}
              </span>
            </div>
            
            {/* Formula Title */}
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: getChapterColor(chapter.color),
              marginBottom: 'var(--spacing-xl)',
              lineHeight: 1.2
            }}>
              {formula.name}
            </h2>
            
            {/* Formula Display */}
            <div className="formula-text" style={{
              fontSize: '1.75rem',
              lineHeight: 1.4,
              padding: 'var(--spacing-xl)',
              margin: 'var(--spacing-lg) 0',
              background: isDark ? '#0A0A0A' : '#F8F8F8',
              border: `2px solid ${getChapterColor(chapter.color)}`,
              borderRadius: 'var(--radius-lg)',
              color: getChapterColor(chapter.color),
              fontWeight: 500,
              letterSpacing: '0.05em',
              boxShadow: `0 0 20px ${getChapterColor(chapter.color)}22`
            }}>
              {formula.formula}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Variables Explained */}
          {formula.vars.length > 0 && (
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-xl)',
              marginBottom: 'var(--spacing-xl)'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 'var(--spacing-lg)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)'
              }}>
                <span style={{ color: getChapterColor(chapter.color) }}>📌</span>
                Variables Explained
              </h3>
              
              {formula.vars.map((variable, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: 'var(--spacing-md)',
                  marginBottom: 'var(--spacing-md)',
                  alignItems: 'flex-start'
                }}>
                  <span style={{
                    background: getChapterColor(chapter.color),
                    color: 'white',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                    borderRadius: 'var(--radius-sm)',
                    flexShrink: 0,
                    minWidth: '60px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {variable.k}
                  </span>
                  <span style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    fontFamily: 'var(--font-body)'
                  }}>
                    {variable.d}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Solved Examples */}
          {formula.examples.map((example, exampleIndex) => (
            <div key={exampleIndex} style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-xl)',
              marginBottom: 'var(--spacing-xl)'
            }}>
              <div style={{
                display: 'inline-block',
                background: `${getChapterColor(chapter.color)}15`,
                border: `1px solid ${getChapterColor(chapter.color)}30`,
                borderRadius: 'var(--radius-full)',
                padding: 'var(--spacing-xs) var(--spacing-md)',
                fontSize: '0.75rem',
                color: getChapterColor(chapter.color),
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--spacing-lg)',
                fontFamily: 'var(--font-heading)'
              }}>
                📝 Solved Example {exampleIndex + 1}
              </div>
              
              {/* Question */}
              <div style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-lg)',
                fontSize: '0.875rem',
                lineHeight: 1.6,
                fontFamily: 'var(--font-body)',
                color: 'var(--text-primary)',
                borderLeft: `4px solid ${getChapterColor(chapter.color)}`
              }}>
                <strong>Q:</strong> {example.q}
              </div>
              
              {/* Steps */}
              <div style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-muted)',
                marginBottom: 'var(--spacing-md)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600
              }}>
                Step by Step Solution
              </div>
              
              {example.steps.map((step, stepIndex) => (
                <div key={stepIndex} style={{
                  display: 'flex',
                  gap: 'var(--spacing-md)',
                  marginBottom: 'var(--spacing-sm)',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    background: 'var(--border-primary)',
                    color: 'var(--text-primary)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    width: '24px',
                    height: '24px',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {stepIndex + 1}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    fontFamily: 'var(--font-body)',
                    flex: 1
                  }}>
                    {step}
                  </div>
                </div>
              ))}
              
              {/* Answer */}
              <div style={{
                background: isDark ? '#0A0A0A' : '#F8F8F8',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-lg)',
                marginTop: 'var(--spacing-lg)',
                border: `2px solid ${getChapterColor(chapter.color)}`,
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)'
              }}>
                <span style={{ color: getChapterColor(chapter.color), fontSize: '1.2rem' }}>✅</span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  color: getChapterColor(chapter.color),
                  fontSize: '1rem',
                  fontWeight: 600
                }}>
                  {example.ans}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation - Fixed Bottom */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-primary)',
        padding: 'var(--spacing-lg)',
        backdropFilter: 'blur(10px)',
        zIndex: 30
      }}>
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-lg)',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <button
            onClick={goToPrevious}
            disabled={currentFormulaIndex === 0}
            className="btn btn-secondary"
            style={{
              flex: 1,
              opacity: currentFormulaIndex === 0 ? 0.5 : 1,
              cursor: currentFormulaIndex === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            ← Previous
          </button>
          <button
            onClick={goToNext}
            disabled={currentFormulaIndex === chapter.formulas.length - 1}
            className="btn btn-primary"
            style={{
              flex: 1,
              opacity: currentFormulaIndex === chapter.formulas.length - 1 ? 0.5 : 1,
              cursor: currentFormulaIndex === chapter.formulas.length - 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Next →
          </button>
        </div>
        
        {/* Progress Bar */}
        <div style={{
          marginTop: 'var(--spacing-md)',
          background: 'var(--border-primary)',
          borderRadius: 'var(--radius-full)',
          height: '4px',
          maxWidth: '400px',
          margin: 'var(--spacing-md) auto 0'
        }}>
          <div style={{
            background: getChapterColor(chapter.color),
            borderRadius: 'var(--radius-full)',
            height: '4px',
            width: `${((currentFormulaIndex + 1) / chapter.formulas.length) * 100}%`,
            transition: 'width var(--transition-normal)'
          }} />
        </div>
      </div>

      {/* Add padding to bottom to account for fixed navigation */}
      <div style={{ height: '120px' }} />
    </Layout>
  );
};

export default FormulaPage;
