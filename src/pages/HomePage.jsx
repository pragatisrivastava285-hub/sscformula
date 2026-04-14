import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../styles/theme';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import SearchInput from '../components/common/SearchInput';
import Tag from '../components/common/Tag';
import { searchFormulas, getStatistics } from '../utils/dataLoader';

const HomePage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  
  const filteredChapters = searchFormulas(search);
  const stats = getStatistics();

  const openChapter = (chapter) => {
    navigate(`/chapter/${chapter.id}`);
  };

  const heroStyles = {
    background: theme.gradients.primary,
    borderBottom: `3px solid ${theme.colors.primary}`,
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: theme.spacing.xxxl,
  };

  const glowStyles = (color, size = 260, top = -60, right = -60) => ({
    position: 'absolute',
    top,
    right,
    width: size,
    height: size,
    borderRadius: '50%',
    background: `radial-gradient(circle,${color}22,transparent 70%)`,
    pointerEvents: 'none',
  });

  const heroContentStyles = {
    textAlign: 'center',
    padding: '36px 20px 10px',
    position: 'relative',
  };

  const badgeStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing.xs,
    background: `${theme.colors.primary}15`,
    border: `1px solid ${theme.colors.primary}40`,
    borderRadius: theme.borderRadius.full,
    padding: '5px 16px',
    marginBottom: theme.spacing.lg,
  };

  const titleStyles = {
    fontFamily: theme.typography.fontFamily.display,
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: theme.typography.fontWeight.bold,
    margin: 0,
    lineHeight: theme.typography.lineHeight.tight,
  };

  const subtitleStyles = {
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.sm,
    fontSize: theme.typography.fontSize.lg,
    fontFamily: theme.typography.fontFamily.body,
  };

  const statsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing.xl,
    marginTop: theme.spacing.lg,
    flexWrap: 'wrap',
  };

  const statItemStyles = {
    textAlign: 'center',
  };

  const statNumberStyles = (index) => ({
    fontSize: '1.5rem',
    fontWeight: theme.typography.fontWeight.bold,
    color: [theme.colors.primary, theme.colors.info, theme.colors.success][index],
    fontFamily: theme.typography.fontFamily.display,
  });

  const statLabelStyles = {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const searchContainerStyles = {
    padding: `${theme.spacing.lg} ${theme.spacing.lg} ${theme.spacing.sm}`,
    maxWidth: '640px',
    margin: '0 auto',
  };

  const resultsHeaderStyles = {
    padding: `${theme.spacing.sm} ${theme.spacing.lg} ${theme.spacing.xs}`,
    color: theme.colors.textDim,
    fontSize: theme.typography.fontSize.xs,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    maxWidth: '640px',
    margin: '0 auto',
  };

  const chaptersGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(148px, 1fr))',
    gap: theme.spacing.md,
    padding: `${theme.spacing.xs} ${theme.spacing.lg} ${theme.spacing.xl}`,
    maxWidth: '860px',
    margin: '0 auto',
  };

  const chapterCardStyles = (chapter) => ({
    cursor: 'pointer',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  });

  const chapterTopBorderStyles = (color) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: color,
    borderRadius: `${theme.borderRadius.large} ${theme.borderRadius.large} 0 0`,
  });

  const chapterIconStyles = {
    fontSize: '2.2rem',
    marginBottom: theme.spacing.sm,
  };

  const chapterNameStyles = {
    fontWeight: theme.typography.fontWeight.semibold,
    fontSize: theme.typography.fontSize.sm,
    marginBottom: theme.spacing.sm,
    lineHeight: theme.typography.lineHeight.tight,
    fontFamily: theme.typography.fontFamily.body,
    color: theme.colors.text,
  };

  const chapterCountStyles = (color) => ({
    background: `${color}22`,
    color: color,
    fontSize: theme.typography.fontSize.xs,
    padding: '3px 10px',
    borderRadius: theme.borderRadius.full,
    fontWeight: theme.typography.fontWeight.semibold,
    display: 'inline-block',
  });

  const footerStyles = {
    textAlign: 'center',
    padding: '10px 0 30px',
    color: theme.colors.textDim,
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily.body,
  };

  return (
    <Layout>
      <Header />
      {/* Hero Section */}
      <div style={heroStyles}>
        <div style={glowStyles(theme.colors.primary, 260, -60, -60)} />
        <div style={glowStyles(theme.colors.info, 200, -40, -40)} />
        
        <div style={heroContentStyles}>
          <div style={badgeStyles}>
            <span style={{
              fontSize: theme.typography.fontSize.xs,
              color: theme.colors.primary,
              fontWeight: theme.typography.fontWeight.semibold,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}>
              SSC CGL · CHSL · MTS · CPO
            </span>
          </div>
          
          <h1 style={titleStyles}>
            <span style={{ color: theme.colors.primary }}>Bubu</span>
            <span style={{ color: '#fff' }}>SSC</span>
          </h1>
          
          <p style={subtitleStyles}>
            All formulas · Solved examples · One tap access
          </p>
          
          <div style={statsContainerStyles}>
            {[
              ['📚', stats.chapters, 'Chapters'],
              ['🔢', stats.formulas, 'Formulas'],
              ['✅', stats.examples, 'Examples']
            ].map(([icon, count, label], index) => (
              <div key={index} style={statItemStyles}>
                <div style={statNumberStyles(index)}>{count}</div>
                <div style={statLabelStyles}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div style={searchContainerStyles}>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search chapters or formulas..."
        />
      </div>

      {/* Results Header */}
      <div style={resultsHeaderStyles}>
        📖 {filteredChapters.length} Chapter{filteredChapters.length !== 1 ? 's' : ''}
      </div>

      {/* Chapters Grid */}
      <div style={chaptersGridStyles}>
        {filteredChapters.map(chapter => (
          <Card
            key={chapter.id}
            hover={true}
            onClick={() => openChapter(chapter)}
            style={chapterCardStyles(chapter)}
          >
            <div style={chapterTopBorderStyles(chapter.color)} />
            <div style={chapterIconStyles}>{chapter.icon}</div>
            <div style={chapterNameStyles}>{chapter.name}</div>
            <div style={chapterCountStyles(chapter.color)}>
              {chapter.formulas.length} Formulas
            </div>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <div style={footerStyles}>
        Made with ❤️ for SSC aspirants · <span style={{ 
          color: theme.colors.primary, 
          fontWeight: theme.typography.fontWeight.semibold 
        }}>BubuSSC</span>
      </div>
    </Layout>
  );
};

export default HomePage;
