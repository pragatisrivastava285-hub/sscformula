import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { theme } from '../styles/theme';
import Layout from '../components/layout/Layout';
import Card from '../components/common/Card';
import Tag from '../components/common/Tag';
import Button from '../components/common/Button';
import { getChapterById } from '../utils/dataLoader';

const ChapterPage = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const chapter = getChapterById(chapterId);

  if (!chapter) {
    return (
      <Layout>
        <div style={{ padding: theme.spacing.xl, textAlign: 'center' }}>
          <h1>Chapter not found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </Layout>
    );
  }

  const openFormula = (index) => {
    navigate(`/chapter/${chapterId}/formula/${index}`);
  };

  const headerStyles = {
    background: theme.colors.surface,
    borderBottom: `1px solid ${theme.colors.border}`,
    padding: '13px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    position: 'sticky',
    top: 0,
    zIndex: 20,
  };

  const titleStyles = {
    fontFamily: theme.typography.fontFamily.display,
    fontWeight: theme.typography.fontWeight.semibold,
    fontSize: theme.typography.fontSize.xl,
    color: chapter.color,
    lineHeight: theme.typography.lineHeight.tight,
  };

  const subtitleStyles = {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.textMuted,
  };

  const contentStyles = {
    padding: `${theme.spacing.lg} ${theme.spacing.lg} ${theme.spacing.xxxl}`,
    maxWidth: '700px',
    margin: '0 auto',
  };

  const infoCardStyles = {
    marginBottom: theme.spacing.md,
    display: 'flex',
    gap: theme.spacing.sm,
    alignItems: 'flex-start',
  };

  const infoIconStyles = {
    fontSize: '1.2rem',
  };

  const infoTextStyles = {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    lineHeight: theme.typography.lineHeight.relaxed,
    fontFamily: theme.typography.fontFamily.body,
  };

  const formulaItemStyles = {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
    transition: 'all 0.18s ease',
    marginBottom: theme.spacing.sm,
  };

  const formulaContentStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
  };

  const formulaNumberStyles = {
    background: chapter.color,
    color: theme.colors.background,
    fontWeight: theme.typography.fontWeight.semibold,
    width: '34px',
    height: '34px',
    borderRadius: theme.borderRadius.small,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.typography.fontSize.sm,
    flexShrink: 0,
    fontFamily: theme.typography.fontFamily.display,
  };

  const formulaNameStyles = {
    fontWeight: theme.typography.fontWeight.semibold,
    fontSize: theme.typography.fontSize.base,
    fontFamily: theme.typography.fontFamily.body,
    marginBottom: '4px',
  };

  const arrowStyles = {
    color: chapter.color,
    fontSize: '1.4rem',
    flexShrink: 0,
  };

  return (
    <Layout>
      {/* Header */}
      <div style={headerStyles}>
        <Button 
          variant="secondary" 
          onClick={() => navigate('/')}
          style={{ padding: '8px 14px' }}
        >
          ← Home
        </Button>
        <div>
          <div style={titleStyles}>{chapter.icon} {chapter.name}</div>
          <div style={subtitleStyles}>{chapter.formulas.length} formulas — tap any to open</div>
        </div>
      </div>

      {/* Content */}
      <div style={contentStyles}>
        {/* Info Card */}
        <Card background="surfaceDark" style={infoCardStyles}>
          <span style={infoIconStyles}>💡</span>
          <span style={infoTextStyles}>
            Tap any formula below to see the full formula, variables explained, and a step-by-step solved example.
          </span>
        </Card>

        {/* Formulas List */}
        {chapter.formulas.map((formula, index) => (
          <Card
            key={index}
            hover={true}
            onClick={() => openFormula(index)}
            className="fitem"
            style={formulaItemStyles}
          >
            <div style={formulaContentStyles}>
              <div style={formulaNumberStyles}>
                {index + 1}
              </div>
              <div>
                <div style={formulaNameStyles}>{formula.name}</div>
                <Tag>{formula.tag}</Tag>
              </div>
            </div>
            <div style={arrowStyles}>›</div>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default ChapterPage;
