import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import { loadQuickTricks, searchQuickTricks, getQuickTricksByTopic } from '../utils/dataLoader';

const QuickTricksPage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  
  const allTricks = loadQuickTricks();
  const filteredTricks = search 
    ? searchQuickTricks(search)
    : selectedTopic === 'all' 
      ? allTricks 
      : getQuickTricksByTopic(selectedTopic);

  const topics = [...new Set(allTricks.map(trick => trick.topic))];

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Easy': '#22c55e',
      'Medium': '#f59e0b', 
      'Hard': '#ef4444'
    };
    return colors[difficulty] || '#6b7280';
  };

  const getFrequencyColor = (frequency) => {
    const colors = {
      'Very High': '#dc2626',
      'High': '#ea580c',
      'Medium': '#ca8a04',
      'Low': '#65a30d'
    };
    return colors[frequency] || '#6b7280';
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <Layout>
      <Header />
      
      <div style={{
        padding: 'var(--spacing-2xl) var(--spacing-lg)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--spacing-2xl)',
            flexWrap: 'wrap',
            gap: 'var(--spacing-lg)'
          }}
        >
          <div>
            <button
              onClick={goBack}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-body)',
                marginBottom: 'var(--spacing-sm)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'var(--bg-hover)';
                e.target.style.borderColor = 'var(--border-focus)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'var(--bg-surface)';
                e.target.style.borderColor = 'var(--border-primary)';
              }}
            >
              Back to Home
            </button>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              margin: 0
            }}>
              Quick Tricks & Shortcuts
            </h1>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-body)',
              margin: 'var(--spacing-sm) 0 0 0'
            }}>
              {allTricks.length} time-saving tricks for SSC exams
            </p>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            display: 'flex',
            gap: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-2xl)',
            flexWrap: 'wrap'
          }}
        >
          <input
            type="text"
            placeholder="Search tricks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              minWidth: '250px',
              padding: 'var(--spacing-md)',
              fontSize: '1rem',
              border: '2px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)'
            }}
          />
          
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            style={{
              padding: 'var(--spacing-md)',
              fontSize: '1rem',
              border: '2px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer'
            }}
          >
            <option value="all">All Topics</option>
            {topics.map(topic => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.875rem',
            marginBottom: 'var(--spacing-lg)',
            fontFamily: 'var(--font-body)'
          }}
        >
          Showing {filteredTricks.length} of {allTricks.length} tricks
        </motion.div>

        {/* Tricks Grid */}
        <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3" style={{ gap: 'var(--spacing-lg)' }}>
          {filteredTricks.map((trick, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-xl)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all var(--transition-normal)'
              }}
            >
              {/* Topic Badge */}
              <div style={{
                position: 'absolute',
                top: 'var(--spacing-sm)',
                right: 'var(--spacing-sm)',
                background: 'var(--accent-blue)',
                color: 'white',
                padding: 'var(--spacing-xs) var(--spacing-sm)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {trick.topic}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                marginBottom: 'var(--spacing-md)',
                paddingRight: 'var(--spacing-xl)',
                lineHeight: '1.3'
              }}>
                {trick.trickName}
              </h3>

              {/* When to Use */}
              <div style={{
                marginBottom: 'var(--spacing-md)'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-heading)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 'var(--spacing-xs)'
                }}>
                  When to Use
                </div>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {trick.whenToUse}
                </p>
              </div>

              {/* Trick */}
              <div style={{
                marginBottom: 'var(--spacing-md)',
                padding: 'var(--spacing-md)',
                background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                borderRadius: 'var(--radius-md)',
                border: `1px solid ${isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}`
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--accent-blue)',
                  fontFamily: 'var(--font-heading)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 'var(--spacing-xs)'
                }}>
                  The Trick
                </div>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {trick.trick}
                </p>
              </div>

              {/* Example */}
              <div style={{
                marginBottom: 'var(--spacing-md)'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-heading)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 'var(--spacing-xs)'
                }}>
                  Example
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  lineHeight: '1.4'
                }}>
                  <div style={{
                    fontWeight: 600,
                    marginBottom: 'var(--spacing-xs)'
                  }}>
                    Q: {trick.example.question}
                  </div>
                  <div style={{ marginBottom: 'var(--spacing-xs)' }}>
                    Solution: {trick.example.solution}
                  </div>
                  <div style={{
                    color: 'var(--accent-green)',
                    fontWeight: 600
                  }}>
                    {trick.example.ans}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                    marginTop: 'var(--spacing-xs)'
                  }}>
                    {trick.example.timeSaved}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div style={{
                display: 'flex',
                gap: 'var(--spacing-sm)',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: getDifficultyColor(trick.difficulty),
                  color: 'white',
                  padding: 'var(--spacing-xs) var(--spacing-sm)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-heading)'
                }}>
                  {trick.difficulty}
                </span>
                <span style={{
                  background: getFrequencyColor(trick.examFrequency),
                  color: 'white',
                  padding: 'var(--spacing-xs) var(--spacing-sm)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-heading)'
                }}>
                  {trick.examFrequency} Frequency
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredTricks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: 'center',
              padding: 'var(--spacing-3xl)',
              color: 'var(--text-muted)'
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)' }}>
              No tricks found
            </div>
            <p style={{ fontSize: '1rem', fontFamily: 'var(--font-body)' }}>
              Try adjusting your search or filters
            </p>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default QuickTricksPage;
