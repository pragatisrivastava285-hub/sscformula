import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { globalStyles } from './styles/globalStyles';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import FormulaPage from './pages/FormulaPage';
import AuthorPage from './pages/AuthorPage';
import AboutPage from './pages/AboutPage';
import SquaresCubesPage from './pages/SquaresCubesPage';
import QuickTricksPage from './pages/QuickTricksPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <style>{globalStyles}</style>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chapter/:chapterId" element={<ChapterPage />} />
            <Route path="/chapter/:chapterId/formula/:formulaIndex" element={<FormulaPage />} />
            <Route path="/squares-cubes" element={<SquaresCubesPage />} />
            <Route path="/quick-tricks" element={<QuickTricksPage />} />
            <Route path="/author" element={<AuthorPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
