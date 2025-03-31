// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <Router>
      <div
        className="min-h-screen"
        style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}
      >
        <ThemeToggle />

        <div className="mx-auto lg:w-1/2 sm:w-fit max-w-5xl px-4">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;