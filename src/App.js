// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Region from './components/Region';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country/*" element={<Region />} />
      </Routes>
    </div>
  );
}

export default App;
