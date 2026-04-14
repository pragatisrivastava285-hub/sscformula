import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { theme } from '../styles/theme';
import Layout from '../components/layout/Layout';
import Card from '../components/common/Card';
import Tag from '../components/common/Tag';
import Button from '../components/common/Button';
import { getChapterById, getFormulaById } from '../utils/dataLoader';

const FormulaPage = () => {
  const { chapterId, formulaIndex } = useParams();
  const navigate = useNavigate();
  const chapter = getChapterById(chapterId);
  const [currentFormulaIndex, setCurrentFormulaIndex] = useState(parseInt(formulaIndex));
  
  const formula = chapter ? chapter.formulas[currentFormulaIndex] : null;

  if (!chapter || !formula) {
    return (
      <Layout>
        <div style={{ padding: theme.spacing.xl, textAlign: 'center' }}>
          <h1>Formula not found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
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

  const headerTitleStyles = {
    fontFamily: theme.typography.fontFamily.body,
    fontWeight: theme.typography.fontWeight.semibold,
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    lineHeight: theme.typography.lineHeight.tight,
  };

  const headerSubtitleStyles = {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.textDim,
  };

  const dotsContainerStyles = {
    display: 'flex',
    gap: '4px',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    maxWidth: '100px',
  };

  const dotStyles = (isActive) => ({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: isActive ? chapter.color : theme.colors.border,
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  });

  const contentStyles = {
    padding: theme.spacing.lg,
    maxWidth: '700px',
    margin: '0 auto',
    paddingBottom: '50px',
  };

  const formulaCardStyles = {
    marginBottom: theme.spacing.md,
    position: 'relative',
    overflow: 'hidden',
    border: `2px solid ${chapter.color}`,
  };

  const glowStyles = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: `radial-gradient(circle,${chapter.color}22,transparent 70%)`,
    pointerEvents: 'none',
  };

  const formulaHeaderStyles = {
    marginBottom: theme.spacing.md,
  };

  const formulaTitleStyles = {
    fontFamily: theme.typography.fontFamily.display,
    fontWeight: theme.typography.fontWeight.semibold,
    fontSize: theme.typography.fontSize['2xl'],
    color: chapter.color,
    margin: 0,
    lineHeight: theme.typography.lineHeight.tight,
  };

  const formulaDisplayStyles = {
    background: '#020812',
    borderRadius: theme.borderRadius.medium,
    padding: '18px 16px',
    margin: '14px 0',
    fontFamily: theme.typography.fontFamily.mono,
    fontSize: '0.97rem',
    color: theme.colors.success,
    lineHeight: theme.typography.lineHeight.loose,
    border: `1px solid ${chapter.color}44`,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    letterSpacing: '0.3px',
  };

  const variablesSectionStyles = {
    marginTop: '4px',
  };

  const variablesTitleStyles = {
    fontSize: theme.typography.fontSize.xs,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: theme.colors.info,
    fontWeight: theme.typography.fontWeight.semibold,
    marginBottom: theme.spacing.sm,
  };

  const variableItemStyles = {
    display: 'flex',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
    alignItems: 'flex-start',
  };

  const variableKeyStyles = {
    background: theme.colors.border,
    color: '#93c5fd',
    fontFamily: theme.typography.fontFamily.mono,
    fontSize: theme.typography.fontSize.sm,
    padding: '3px 9px',
    borderRadius: '6px',
    flexShrink: 0,
    marginTop: '1px',
    fontWeight: theme.typography.fontWeight.semibold,
  };

  const variableDescStyles = {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    lineHeight: theme.typography.lineHeight.relaxed,
    fontFamily: theme.typography.fontFamily.body,
  };

  const exampleCardStyles = {
    background: theme.colors.surfaceDark,
    border: `1.5px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.xl,
    padding: '20px 18px',
    marginBottom: theme.spacing.md,
  };

  const exampleBadgeStyles = {
    display: 'inline-block',
    background: `${theme.colors.primary}15`,
    border: `1px solid ${theme.colors.primary}30`,
    borderRadius: theme.borderRadius.small,
    padding: '4px 10px',
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.primary,
    fontWeight: theme.typography.fontWeight.semibold,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: theme.spacing.md,
  };

  const questionStyles = {
    background: theme.colors.surface,
    borderRadius: theme.borderRadius.small,
    padding: '12px 14px',
    marginBottom: theme.spacing.md,
    fontSize: theme.typography.fontSize.sm,
    lineHeight: theme.typography.lineHeight.relaxed,
    fontFamily: theme.typography.fontFamily.body,
    color: theme.colors.text,
    borderLeft: `3px solid ${chapter.color}`,
  };

  const stepsTitleStyles = {
    fontSize: theme.typography.fontSize.xs,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: theme.colors.textMuted,
    marginBottom: theme.spacing.sm,
  };

  const stepItemStyles = {
    display: 'flex',
    gap: theme.spacing.sm,
    marginBottom: '7px',
    alignItems: 'flex-start',
  };

  const stepNumberStyles = {
    background: theme.colors.border,
    color: '#93c5fd',
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.semibold,
    width: '20px',
    height: '20px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '1px',
  };

  const stepTextStyles = {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    lineHeight: theme.typography.lineHeight.relaxed,
    fontFamily: theme.typography.fontFamily.body,
  };

  const answerStyles = {
    background: '#020812',
    borderRadius: theme.borderRadius.small,
    padding: '12px 14px',
    fontFamily: theme.typography.fontFamily.mono,
    color: theme.colors.success,
    fontSize: theme.typography.fontSize.sm,
    marginTop: theme.spacing.sm,
    border: '1px solid #14532d',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs,
  };

  const navigationStyles = {
    display: 'flex',
    gap: theme.spacing.md,
    marginTop: '6px',
  };

  const progressStyles = {
    marginTop: theme.spacing.md,
    background: theme.colors.surface,
    borderRadius: theme.borderRadius.medium,
    padding: '12px 14px',
    border: `1px solid ${theme.colors.border}`,
  };

  const progressHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm,
  };

  const progressLabelStyles = {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const progressValueStyles = {
    fontSize: theme.typography.fontSize.xs,
    color: chapter.color,
    fontWeight: theme.typography.fontWeight.semibold,
  };

  const progressBarStyles = {
    background: theme.colors.border,
    borderRadius: theme.borderRadius.full,
    height: '6px',
  };

  const progressFillStyles = {
    background: chapter.color,
    borderRadius: theme.borderRadius.full,
    height: '6px',
    width: `${((currentFormulaIndex + 1) / chapter.formulas.length) * 100}%`,
    transition: 'width 0.3s ease',
  };

  return (
    <Layout>
      {/* Header */}
      <div style={headerStyles}>
        <Button 
          variant="secondary" 
          onClick={goBack}
          style={{ padding: '8px 14px' }}
        >
          ← Back
        </Button>
        <div style={{ flex: 1 }}>
          <div style={headerTitleStyles}>{chapter.icon} {chapter.name}</div>
          <div style={headerSubtitleStyles}>Formula {currentFormulaIndex + 1} of {chapter.formulas.length}</div>
        </div>
        <div style={dotsContainerStyles}>
          {chapter.formulas.map((_, index) => (
            <div
              key={index}
              onClick={() => openFormula(index)}
              style={dotStyles(index === currentFormulaIndex)}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={contentStyles}>
        {/* Formula Card */}
        <Card background="formula" style={formulaCardStyles}>
          <div style={glowStyles} />
          <div style={formulaHeaderStyles}>
            <Tag style={{ marginBottom: '10px', display: 'inline-block' }}>
              {formula.tag}
            </Tag>
            <h2 style={formulaTitleStyles}>{formula.name}</h2>
          </div>
          
          <div style={formulaDisplayStyles}>
            {formula.formula}
          </div>
          
          {formula.vars.length > 0 && (
            <div style={variablesSectionStyles}>
              <div style={variablesTitleStyles}>📌 Variables Explained</div>
              {formula.vars.map((variable, index) => (
                <div key={index} style={variableItemStyles}>
                  <span style={variableKeyStyles}>{variable.k}</span>
                  <span style={variableDescStyles}>{variable.d}</span>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Examples */}
        {formula.examples.map((example, exampleIndex) => (
          <Card key={exampleIndex} background="surfaceDark" style={exampleCardStyles}>
            <div style={exampleBadgeStyles}>📝 Solved Example</div>
            <div style={questionStyles}>❓ {example.q}</div>
            <div style={stepsTitleStyles}>Step by Step</div>
            {example.steps.map((step, stepIndex) => (
              <div key={stepIndex} style={stepItemStyles}>
                <div style={stepNumberStyles}>{stepIndex + 1}</div>
                <div style={stepTextStyles}>{step}</div>
              </div>
            ))}
            <div style={answerStyles}>
              <span>✅</span>
              <strong>{example.ans}</strong>
            </div>
          </Card>
        ))}

        {/* Navigation */}
        <div style={navigationStyles}>
          <Button
            onClick={goToPrevious}
            disabled={currentFormulaIndex === 0}
            variant="secondary"
            style={{ flex: 1 }}
          >
            ← Previous
          </Button>
          <Button
            onClick={goToNext}
            disabled={currentFormulaIndex === chapter.formulas.length - 1}
            variant="secondary"
            style={{ flex: 1 }}
          >
            Next →
          </Button>
        </div>

        {/* Progress */}
        <div style={progressStyles}>
          <div style={progressHeaderStyles}>
            <span style={progressLabelStyles}>Chapter Progress</span>
            <span style={progressValueStyles}>{currentFormulaIndex + 1}/{chapter.formulas.length}</span>
          </div>
          <div style={progressBarStyles}>
            <div style={progressFillStyles} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormulaPage;
