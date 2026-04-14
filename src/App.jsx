import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { globalStyles } from './styles/theme';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import FormulaPage from './pages/FormulaPage';
import AuthorPage from './pages/AuthorPage';

function App() {
  return (
    <Router>
      <div>
        <style>{globalStyles}</style>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chapter/:chapterId" element={<ChapterPage />} />
          <Route path="/chapter/:chapterId/formula/:formulaIndex" element={<FormulaPage />} />
          <Route path="/author" element={<AuthorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
