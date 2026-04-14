import formulasData from '../data/formulas.json';
import authorData from '../data/author.json';
import quickTricksData from '../data/quick_tricks.json';
import advancedFormulasData from '../data/advanced_formulas.json';
import algebraExpandedData from '../data/algebra_expanded.json';
import geometryExpandedData from '../data/geometry_expanded.json';
import trigonometryExpandedData from '../data/trigonometry_expanded.json';
import dataInterpretationExpandedData from '../data/data_interpretation_expanded.json';
import practiceQuestionsData from '../data/practice_questions.json';

export const loadFormulas = () => {
  return formulasData;
};

export const loadAdvancedFormulas = () => {
  return advancedFormulasData.topics;
};

export const loadAlgebraExpanded = () => {
  return [algebraExpandedData];
};

export const loadGeometryExpanded = () => {
  return [geometryExpandedData];
};

export const loadTrigonometryExpanded = () => {
  return [trigonometryExpandedData];
};

export const loadDataInterpretationExpanded = () => {
  return [dataInterpretationExpandedData];
};

export const loadPracticeQuestions = () => {
  return practiceQuestionsData.categories;
};

export const loadAllFormulas = () => {
  const practiceChapters = practiceQuestionsData.categories.map(category => ({
    id: category.id,
    name: category.name,
    icon: "📝",
    color: "#06b6d4",
    formulas: category.questions.map((question, index) => ({
      name: `Practice Question ${index + 1}`,
      tag: category.difficulty,
      formula: question.question,
      vars: [],
      examples: [{
        q: question.question,
        steps: [question.explanation],
        ans: question.answer,
        options: question.options
      }]
    }))
  }));
  
  return [
    ...formulasData,
    ...advancedFormulasData.topics,
    algebraExpandedData,
    geometryExpandedData,
    trigonometryExpandedData,
    dataInterpretationExpandedData,
    ...practiceChapters
  ];
};

export const getAllPracticeQuestions = () => {
  return practiceQuestionsData.categories;
};

export const getPracticeQuestionsByCategory = (categoryId) => {
  const categories = loadPracticeQuestions();
  return categories.find(category => category.id === categoryId);
};

export const searchPracticeQuestions = (query) => {
  const categories = loadPracticeQuestions();
  if (!query.trim()) return categories;
  
  const lowerQuery = query.toLowerCase();
  return categories.filter(category =>
    category.name.toLowerCase().includes(lowerQuery) ||
    category.questions.some(question => 
      question.question.toLowerCase().includes(lowerQuery)
    )
  );
};

export const loadAuthor = () => {
  return authorData;
};

export const loadQuickTricks = () => {
  return quickTricksData;
};

export const getQuickTricksByTopic = (topic) => {
  const tricks = loadQuickTricks();
  return tricks.filter(trick => trick.topic.toLowerCase() === topic.toLowerCase());
};

export const searchQuickTricks = (query) => {
  const tricks = loadQuickTricks();
  if (!query.trim()) return tricks;
  
  const lowerQuery = query.toLowerCase();
  return tricks.filter(trick =>
    trick.topic.toLowerCase().includes(lowerQuery) ||
    trick.trickName.toLowerCase().includes(lowerQuery) ||
    trick.whenToUse.toLowerCase().includes(lowerQuery)
  );
};


export const getFormulaById = (chapterId, formulaIndex) => {
  const chapter = getChapterById(chapterId);
  if (!chapter) return null;
  return chapter.formulas[formulaIndex];
};

export const searchFormulas = (query) => {
  const formulas = loadAllFormulas();
  if (!query.trim()) return formulas;
  
  const lowerQuery = query.toLowerCase();
  return formulas.filter(chapter =>
    chapter.name.toLowerCase().includes(lowerQuery) ||
    chapter.formulas.some(formula => 
      formula.name.toLowerCase().includes(lowerQuery)
    )
  );
};

export const getStatistics = () => {
  const formulas = loadAllFormulas();
  return {
    chapters: formulas.length,
    formulas: formulas.reduce((total, chapter) => total + chapter.formulas.length, 0),
    examples: formulas.reduce((total, chapter) => 
      total + chapter.formulas.reduce((chapterTotal, formula) => 
        chapterTotal + formula.examples.length, 0
      ), 0
    )
  };
};

export const getChapterById = (id) => {
  const formulas = loadAllFormulas();
  return formulas.find(chapter => chapter.id === id);
};
