// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Continent from './components/Continent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country/*" element={<Continent />} />
      </Routes>
    </div>
  );
}

export default App;
