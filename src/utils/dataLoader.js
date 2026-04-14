import formulasData from '../data/formulas.json';
import authorData from '../data/author.json';

export const loadFormulas = () => {
  return formulasData;
};

export const loadAuthor = () => {
  return authorData;
};

export const getChapterById = (id) => {
  const formulas = loadFormulas();
  return formulas.find(chapter => chapter.id === id);
};

export const getFormulaById = (chapterId, formulaIndex) => {
  const chapter = getChapterById(chapterId);
  if (!chapter) return null;
  return chapter.formulas[formulaIndex];
};

export const searchFormulas = (query) => {
  const formulas = loadFormulas();
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
  const formulas = loadFormulas();
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
