// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ProjectDetailPage from './pages/ProjectDetailPage';

// IMPORTANT: We apply the default body styles here:
// bg-black text-white font-poppins and scroll-smooth.
function App() {
  return (
    <div className="bg-black text-white min-h-screen font-poppins scroll-smooth">
      {/* 1. Header is fixed at the top (already provided) */}
      <Header />

      <Routes>
        {/* 2. Main content sections, linked by IDs */}
        <Route
          path="/"
          element={
            <main>
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <ContactSection />
            </main>
          }
        />

        {/* 3. Project detail pages */}
        <Route
          path="/project/ethio-post"
          element={
            <main className="py-[75px]">
              <ProjectDetailPage />
            </main>
          }
        />
      </Routes>

      {/* 4. Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
