import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import squaresCubesData from '../data/perfect_squares_cubes.json';

const SquaresCubesPage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const TableSection = ({ title, data, type, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-primary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-2xl)',
        marginBottom: 'var(--spacing-lg)'
      }}
    >
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.5rem',
        fontWeight: 600,
        color: 'var(--text-primary)',
        marginBottom: 'var(--spacing-lg)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {title}
      </h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', fontSize: '0.875rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
              <th style={{
                textAlign: 'left',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '0.75rem'
              }}>Number</th>
              <th style={{
                textAlign: 'left',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '0.75rem'
              }}>
                {type === 'square' ? 'Square' : 'Cube'}
              </th>
              <th style={{
                textAlign: 'left',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '0.75rem'
              }}>
                {type === 'square' ? 'Square Root' : 'Cube Root'}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr 
                key={index} 
                style={{
                  borderBottom: '1px solid var(--border-primary)',
                  transition: 'background-color var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <td style={{
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)'
                }}>
                  {item.number}
                </td>
                <td style={{
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {item.square || item.cube}
                </td>
                <td style={{
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {item.root || item.cube_root}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  const TrickSection = ({ title, tricks, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      style={{
        background: 'linear-gradient(135deg, var(--accent-orange), var(--accent-blue))',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-2xl)',
        marginBottom: 'var(--spacing-lg)'
      }}
    >
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.5rem',
        fontWeight: 600,
        color: 'white',
        marginBottom: 'var(--spacing-lg)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
        {tricks.map((trick, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-md)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.6
          }}>
            {trick}
          </div>
        ))}
      </div>
    </motion.div>
  );

  const QuestionSection = ({ questions, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      style={{
        background: 'linear-gradient(135deg, var(--accent-green), var(--accent-blue))',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-2xl)',
        marginBottom: 'var(--spacing-lg)'
      }}
    >
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.5rem',
        fontWeight: 600,
        color: 'white',
        marginBottom: 'var(--spacing-lg)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        Practice Questions
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        {questions.map((q, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-lg)'
          }}>
            <div style={{
              fontWeight: 600,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              marginBottom: 'var(--spacing-sm)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontSize: '0.875rem'
            }}>
              Q{index + 1}: {q.question}
            </div>
            <div style={{
              color: 'var(--accent-green)',
              fontWeight: 600,
              fontFamily: 'var(--font-heading)',
              marginBottom: 'var(--spacing-sm)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontSize: '0.75rem'
            }}>
              Answer: {q.answer}
            </div>
            <div style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.6
            }}>
              {q.explanation}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

          {/* Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-lg)'
          }}>
            {/* Squares 1-25 */}
            <TableSection
              title="Perfect Squares (1-25)"
              data={squaresCubesData.data.perfect_squares['1_to_25']}
              type="square"
              delay={0.4}
            />

            {/* Squares 26-50 */}
            <TableSection
              title="Perfect Squares (26-50)"
              data={squaresCubesData.data.perfect_squares['26_to_50']}
              type="square"
              delay={0.5}
            />

            {/* Cubes 1-25 */}
            <TableSection
              title="Perfect Cubes (1-25)"
              data={squaresCubesData.data.perfect_cubes['1_to_25']}
              type="cube"
              delay={0.6}
            />

            {/* Tricks */}
            <TrickSection
              title="Mathematical Tricks"
              tricks={squaresCubesData.data.powers_and_indices.squares_tricks}
              delay={0.7}
            />
          </div>

          {/* Additional Content */}
          <TrickSection
            title="Important Formulas"
            tricks={squaresCubesData.data.powers_and_indices.cube_tricks}
            delay={0.8}
          />

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
              Perfect <span style={{ color: 'var(--accent-orange)' }}>Squares</span> & <span style={{ color: 'var(--accent-blue)' }}>Cubes</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-body)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Comprehensive reference for perfect squares, cubes, and their roots with practice questions
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}
          >
            <button
              onClick={() => navigate('/')}
              className="btn btn-secondary"
            >
              ← Back to Home
            </button>
          </motion.div>

          {/* Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-lg)'
          }}>
            {/* Squares 1-25 */}
            <TableSection
              title="Perfect Squares (1-25)"
              data={squaresCubesData.data.perfect_squares['1_to_25']}
              type="square"
              delay={0.4}
            />

            {/* Squares 26-50 */}
            <TableSection
              title="Perfect Squares (26-50)"
              data={squaresCubesData.data.perfect_squares['26_to_50']}
              type="square"
              delay={0.5}
            />

            {/* Cubes 1-25 */}
            <TableSection
              title="Perfect Cubes (1-25)"
              data={squaresCubesData.data.perfect_cubes['1_to_25']}
              type="cube"
              delay={0.6}
            />

            {/* Tricks */}
            <TrickSection
              title="Mathematical Tricks"
              tricks={squaresCubesData.data.powers_and_indices.squares_tricks}
              delay={0.7}
            />
          </div>

          {/* Additional Content */}
          <TrickSection
            title="Important Formulas"
            tricks={squaresCubesData.data.powers_and_indices.cube_tricks}
            delay={0.8}
          />

          {/* Practice Questions */}
          <QuestionSection 
            questions={squaresCubesData.data.practice_questions} 
            delay={0.9}
          />

        </motion.div>
      </section>
    </Layout>
  );
};

export default SquaresCubesPage;
