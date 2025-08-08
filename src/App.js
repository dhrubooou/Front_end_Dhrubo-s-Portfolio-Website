import './App.css';
import Navbar from './components/navbar';
import Sec from './components/section';
import Sec2 from './components/section2';
import Sec3 from './components/section3';
import Sec4 from './components/section4';
import Sec5 from './components/section5';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Sec />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
