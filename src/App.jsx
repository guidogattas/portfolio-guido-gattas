import styles from './App.module.css';
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';
import { Footer } from './components/Footer/Footer';
import { Projects } from './components/Projects/Projects';
import { LanguageProvider } from './components/LanguageProvider/LanguageProvider';


function App() {
  return (
    <LanguageProvider>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

