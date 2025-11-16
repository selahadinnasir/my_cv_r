// src/App.jsx
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

// IMPORTANT: We apply the default body styles here:
// bg-black text-white font-poppins and scroll-smooth.
function App() {
  return (
    <div className="bg-black text-white min-h-screen font-poppins scroll-smooth">
      {/* 1. Header is fixed at the top (already provided) */}
      <Header />

      <main>
        {/* 2. Main content sections, linked by IDs */}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* 3. Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
