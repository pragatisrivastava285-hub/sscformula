import React from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../styles/theme';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { loadAuthor } from '../utils/dataLoader';

const AuthorPage = () => {
  const navigate = useNavigate();
  const authorData = loadAuthor();

  const goHome = () => {
    navigate('/');
  };

  const headerStyles = {
    background: theme.gradients.primary,
    borderBottom: `3px solid ${theme.colors.primary}`,
    position: 'relative',
    overflow: 'hidden',
    padding: '60px 20px 40px',
    textAlign: 'center',
  };

  const glowStyles = (color, size = 300, top = -150, left = '50%') => ({
    position: 'absolute',
    top,
    left,
    transform: 'translateX(-50%)',
    width: size,
    height: size,
    borderRadius: '50%',
    background: `radial-gradient(circle,${color}15,transparent 70%)`,
    pointerEvents: 'none',
  });

  const titleStyles = {
    fontFamily: theme.typography.fontFamily.display,
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: theme.typography.fontWeight.bold,
    margin: 0,
    lineHeight: theme.typography.lineHeight.tight,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  };

  const subtitleStyles = {
    fontSize: theme.typography.fontSize.xl,
    color: theme.colors.primary,
    fontFamily: theme.typography.fontFamily.body,
    fontWeight: theme.typography.fontWeight.semibold,
    marginBottom: theme.spacing.xl,
  };

  const contentStyles = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: `0 ${theme.spacing.lg} ${theme.spacing.xxxl}`,
  };

  const sectionStyles = {
    marginBottom: theme.spacing.xxl,
  };

  const sectionTitleStyles = {
    fontFamily: theme.typography.fontFamily.display,
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
  };

  const textStyles = {
    fontSize: theme.typography.fontSize.lg,
    lineHeight: theme.typography.lineHeight.relaxed,
    color: theme.colors.textSecondary,
    fontFamily: theme.typography.fontFamily.body,
    marginBottom: theme.spacing.md,
  };

  const expertiseGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: theme.spacing.md,
    marginTop: theme.spacing.lg,
  };

  const expertiseItemStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing.sm,
    padding: theme.spacing.lg,
    background: theme.colors.surface,
    borderRadius: theme.borderRadius.medium,
    border: `1px solid ${theme.colors.border}`,
  };

  const expertiseIconStyles = {
    fontSize: '1.5rem',
    flexShrink: 0,
  };

  const expertiseTextStyles = {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    fontFamily: theme.typography.fontFamily.body,
  };

  const statsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: theme.spacing.md,
    marginTop: theme.spacing.lg,
  };

  const statCardStyles = {
    textAlign: 'center',
    padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
    background: theme.gradients.card,
    borderRadius: theme.borderRadius.large,
    border: `1px solid ${theme.colors.border}`,
  };

  const statNumberStyles = {
    fontSize: '2rem',
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    fontFamily: theme.typography.fontFamily.display,
    marginBottom: theme.spacing.sm,
  };

  const statLabelStyles = {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    fontFamily: theme.typography.fontFamily.body,
  };

  const contactCardStyles = {
    background: theme.colors.surface,
    borderRadius: theme.borderRadius.large,
    padding: theme.spacing.xl,
    border: `1px solid ${theme.colors.border}`,
    marginTop: theme.spacing.lg,
  };

  const contactGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: theme.spacing.lg,
    marginTop: theme.spacing.lg,
  };

  const contactItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
  };

  const contactIconStyles = {
    fontSize: '1.2rem',
    color: theme.colors.primary,
  };

  const contactTextStyles = {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text,
    fontFamily: theme.typography.fontFamily.body,
  };

  const missionVisionStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: theme.spacing.lg,
    marginTop: theme.spacing.lg,
  };

  const missionCardStyles = {
    padding: theme.spacing.xl,
    background: theme.colors.surfaceDark,
    borderRadius: theme.borderRadius.large,
    border: `1px solid ${theme.colors.border}`,
    position: 'relative',
    overflow: 'hidden',
  };

  const cardIconStyles = {
    fontSize: '2rem',
    marginBottom: theme.spacing.md,
  };

  const cardTitleStyles = {
    fontFamily: theme.typography.fontFamily.display,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  };

  const cardTextStyles = {
    fontSize: theme.typography.fontSize.base,
    lineHeight: theme.typography.lineHeight.relaxed,
    color: theme.colors.textSecondary,
    fontFamily: theme.typography.fontFamily.body,
  };

  return (
    <Layout>
      <Header />
      {/* Header */}
      <div style={headerStyles}>
        <div style={glowStyles(theme.colors.primary, 400, -200)} />
        <div style={glowStyles(theme.colors.info, 300, -100)} />
        
        <h1 style={titleStyles}>{authorData.name}</h1>
        <p style={subtitleStyles}>{authorData.title}</p>
      </div>

      {/* Content */}
      <div style={contentStyles}>
        {/* About Section */}
        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>
            <span>📖</span> About Us
          </h2>
          <p style={textStyles}>{authorData.about}</p>
        </div>

        {/* Mission & Vision */}
        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>
            <span>🎯</span> Mission & Vision
          </h2>
          <div style={missionVisionStyles}>
            <Card background="surfaceDark" style={missionCardStyles}>
              <div style={cardIconStyles}>🚀</div>
              <h3 style={cardTitleStyles}>Our Mission</h3>
              <p style={cardTextStyles}>{authorData.mission}</p>
            </Card>
            <Card background="surfaceDark" style={missionCardStyles}>
              <div style={cardIconStyles}>👁️</div>
              <h3 style={cardTitleStyles}>Our Vision</h3>
              <p style={cardTextStyles}>{authorData.vision}</p>
            </Card>
          </div>
        </div>

        {/* Expertise */}
        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>
            <span>💼</span> Our Expertise
          </h2>
          <div style={expertiseGridStyles}>
            {authorData.expertise.map((item, index) => (
              <div key={index} style={expertiseItemStyles}>
                <span style={expertiseIconStyles}>✓</span>
                <span style={expertiseTextStyles}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>
            <span>📊</span> Our Impact
          </h2>
          <div style={statsGridStyles}>
            <div style={statCardStyles}>
              <div style={statNumberStyles}>{authorData.stats.studentsHelped}</div>
              <div style={statLabelStyles}>Students Helped</div>
            </div>
            <div style={statCardStyles}>
              <div style={statNumberStyles}>{authorData.stats.formulasCovered}</div>
              <div style={statLabelStyles}>Formulas Covered</div>
            </div>
            <div style={statCardStyles}>
              <div style={statNumberStyles}>{authorData.stats.successRate}</div>
              <div style={statLabelStyles}>Success Rate</div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>
            <span>📞</span> Get in Touch
          </h2>
          <Card style={contactCardStyles}>
            <div style={contactGridStyles}>
              <div style={contactItemStyles}>
                <span style={contactIconStyles}>📧</span>
                <span style={contactTextStyles}>{authorData.contact.email}</span>
              </div>
              <div style={contactItemStyles}>
                <span style={contactIconStyles}>🌐</span>
                <span style={contactTextStyles}>{authorData.contact.website}</span>
              </div>
              <div style={contactItemStyles}>
                <span style={contactIconStyles}>📺</span>
                <span style={contactTextStyles}>YouTube: {authorData.contact.social.youtube}</span>
              </div>
              <div style={contactItemStyles}>
                <span style={contactIconStyles}>💬</span>
                <span style={contactTextStyles}>Telegram: {authorData.contact.social.telegram}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Back Button */}
        <div style={{ textAlign: 'center', marginTop: theme.spacing.xxl }}>
          <Button onClick={goHome} size="large">
            ← Back to Formulas
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AuthorPage;
