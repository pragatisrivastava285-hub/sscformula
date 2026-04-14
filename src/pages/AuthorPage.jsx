import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import { loadAuthor } from '../utils/dataLoader';

const AuthorPage = () => {
  const { isDark } = useTheme();
  const authorData = loadAuthor();

  return (
    <Layout>
      <Header />
      
      <section style={{
        background: isDark ? 'var(--bg-secondary)' : 'var(--bg-primary)',
        borderBottom: `1px solid var(--border-primary)`,
        minHeight: '100vh',
        padding: 'var(--spacing-2xl) var(--spacing-lg)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}
          >
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-lg)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em'
            }}>
              About <span style={{ color: 'var(--accent-orange)' }}>PragSSC</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-body)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Your comprehensive platform for SSC exam formulas and success
            </p>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-2xl)',
              marginBottom: 'var(--spacing-2xl)'
            }}
          >
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-lg)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)'
            }}>
              <span>📖</span> About Us
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.7,
              margin: 0
            }}>
              {authorData.about}
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              marginBottom: 'var(--spacing-2xl)'
            }}
          >
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-lg)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)'
            }}>
              <span>🎯</span> Mission & Vision
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-lg)'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-2xl)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  🚀
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--accent-orange)',
                  margin: '0 0 var(--spacing-sm) 0'
                }}>
                  Our Mission
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  {authorData.mission}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-2xl)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  👁️
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--accent-orange)',
                  margin: '0 0 var(--spacing-sm) 0'
                }}>
                  Our Vision
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  {authorData.vision}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-2xl)',
              marginBottom: 'var(--spacing-2xl)'
            }}
          >
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-lg)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)'
            }}>
              <span>💼</span> Our Expertise
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--spacing-md)',
              marginTop: 'var(--spacing-lg)'
            }}>
              {authorData.expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--spacing-sm)',
                    padding: 'var(--spacing-lg)',
                    background: isDark ? 'var(--bg-secondary)' : 'var(--bg-primary)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-primary)'
                  }}
                >
                  <span style={{
                    fontSize: '1.5rem',
                    color: 'var(--accent-orange)',
                    flexShrink: 0
                  }}>
                    ✓
                  </span>
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)'
                  }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-2xl)',
              marginBottom: 'var(--spacing-2xl)'
            }}
          >
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-lg)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)'
            }}>
              <span>📊</span> Our Impact
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--spacing-md)',
              marginTop: 'var(--spacing-lg)'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                style={{
                  textAlign: 'center',
                  padding: 'var(--spacing-xl) var(--spacing-lg)',
                  background: isDark ? 'var(--bg-secondary)' : 'var(--bg-primary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-primary)'
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--accent-orange)',
                  marginBottom: 'var(--spacing-sm)'
                }}>
                  {authorData.stats.studentsHelped}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Students Helped
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                style={{
                  textAlign: 'center',
                  padding: 'var(--spacing-xl) var(--spacing-lg)',
                  background: isDark ? 'var(--bg-secondary)' : 'var(--bg-primary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-primary)'
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--accent-blue)',
                  marginBottom: 'var(--spacing-sm)'
                }}>
                  {authorData.stats.formulasCovered}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Formulas Covered
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                style={{
                  textAlign: 'center',
                  padding: 'var(--spacing-xl) var(--spacing-lg)',
                  background: isDark ? 'var(--bg-secondary)' : 'var(--bg-primary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-primary)'
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--accent-green)',
                  marginBottom: 'var(--spacing-sm)'
                }}>
                  {authorData.stats.successRate}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Success Rate
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-2xl)',
              marginBottom: 'var(--spacing-2xl)'
            }}
          >
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-lg)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)'
            }}>
              <span>📞</span> Get in Touch
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--spacing-lg)',
              marginTop: 'var(--spacing-lg)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)'
              }}>
                <span style={{
                  fontSize: '1.2rem',
                  color: 'var(--accent-orange)'
                }}>
                  📧
                </span>
                <span style={{
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)'
                }}>
                  {authorData.contact.email}
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)'
              }}>
                <span style={{
                  fontSize: '1.2rem',
                  color: 'var(--accent-orange)'
                }}>
                  🌐
                </span>
                <span style={{
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)'
                }}>
                  {authorData.contact.website}
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)'
              }}>
                <span style={{
                  fontSize: '1.2rem',
                  color: 'var(--accent-orange)'
                }}>
                  📺
                </span>
                <span style={{
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)'
                }}>
                  YouTube: {authorData.contact.social.youtube}
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)'
              }}>
                <span style={{
                  fontSize: '1.2rem',
                  color: 'var(--accent-orange)'
                }}>
                  💬
                </span>
                <span style={{
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)'
                }}>
                  Telegram: {authorData.contact.social.telegram}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              style={{
                fontSize: '1rem',
                padding: 'var(--spacing-lg) var(--spacing-2xl)',
                background: 'var(--text-primary)',
                color: 'var(--text-inverse)',
                border: 'none',
                borderRadius: 'var(--radius-lg)',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--accent-orange)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'var(--text-primary)';
              }}
            >
              ← Back to Formulas
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default AuthorPage;
