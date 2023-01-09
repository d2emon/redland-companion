import { Route, Routes } from 'react-router-dom';
import About from '../about/About';
import CharGen from '../chargen';
import PowerList from '../powers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharGen />} />
        <Route path="powers" element={<PowerList />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
