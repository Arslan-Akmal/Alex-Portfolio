import Navbar from './components/Navbar';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <Home />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
