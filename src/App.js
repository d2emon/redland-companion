import { Route, Routes } from 'react-router-dom';
import About from './About';
import CharGen from './chargen';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharGen />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
