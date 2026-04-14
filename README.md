# PragSSC - SSC Formula Hub

A comprehensive formula hub for SSC exam preparation, featuring all essential mathematical formulas with step-by-step solved examples.

## 🚀 Features

- **📚 Comprehensive Formula Collection**: All SSC exam formulas organized by chapters
- **📝 Solved Examples**: Step-by-step solutions for better understanding
- **🔍 Smart Search**: Find formulas and chapters instantly
- **📱 Responsive Design**: Works perfectly on all devices
- **🎯 SSC Focused**: Specifically designed for SSC CGL, CHSL, MTS, and CPO exams
- **👨‍💻 Author Information**: Learn about the creators and their expertise

## 📖 Available Chapters

1. **Percentage** - Basic calculations, increase/decrease, shortcuts
2. **Profit & Loss** - SP, CP, discount formulas with examples
3. **Simple & Compound Interest** - SI, CI, half-yearly calculations
4. **Ratio & Proportion** - Basic ratios, mixtures, alligation
5. **Time & Work** - Work problems, pipes & cisterns
6. **Speed, Distance & Time** - Basic SDT, unit conversions, train problems
7. **Algebra** - Identities, equations, shortcuts
8. **Geometry** - Triangles, circles, quadrilaterals
9. **Mensuration (3D)** - Cube, cylinder, cone, sphere formulas
10. **Trigonometry** - Basic ratios, identities, standard angles
11. **Number System** - Divisibility, LCM/HCF, squares/cubes
12. **Average** - Basic, weighted, replacement problems
13. **Simplification** - BODMAS, surds, indices

## 🛠️ Tech Stack

- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Button, Card, Tag, SearchInput
│   └── layout/         # Layout, Header
├── pages/              # Page components
│   ├── HomePage.jsx
│   ├── ChapterPage.jsx
│   ├── FormulaPage.jsx
│   └── AuthorPage.jsx
├── data/               # Data files
│   ├── formulas.json   # All formula data
│   └── author.json     # Author page content
├── styles/             # Theme configuration
│   └── theme.js        # Color scheme and styling
└── utils/              # Utility functions
    └── dataLoader.js   # Data loading utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sscformula
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Adding/Modifying Content

### Adding New Formulas

1. Open `src/data/formulas.json`
2. Add new chapters or formulas following the existing structure
3. The application will automatically update

### Modifying Author Information

1. Open `src/data/author.json`
2. Update the content as needed
3. Changes will reflect immediately on the author page

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.jsx`
3. The page will be available immediately

## 🎨 Customization

### Changing Colors and Theme

Edit `src/styles/theme.js` to customize:
- Color schemes
- Typography
- Spacing
- Border radius
- And more...

### Adding New Components

1. Create component files in `src/components/common/`
2. Import and use them in your pages
3. Follow the existing component patterns

## 📱 Routes

- `/` - Home page with all chapters
- `/chapter/:chapterId` - Individual chapter with formula list
- `/chapter/:chapterId/formula/:formulaIndex` - Detailed formula view
- `/author` - Author information page

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- All SSC aspirants who inspired this project
- Contributors who help improve the formula collection
- The open-source community for amazing tools and libraries

## 📞 Contact

- **Email**: contact@pragssc.com
- **Website**: https://pragssc.com
- **YouTube**: PragSSC
- **Telegram**: PragSSC_Community

---

Made with ❤️ for SSC aspirants · PragSSC
