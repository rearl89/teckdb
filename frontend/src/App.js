import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Copper01 from './pages/Copper01';
import Copper from './pages/Copper';
import Tin from './pages/Tin';
import SN_NEXX from './pages/SN_NEXX';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/copper" element={<Copper />} />
            <Route path="/tin" element={<Tin />} />
            <Route path="/copper01" element={<Copper01 />} />
            <Route path="/sn-nexx" element={<SN_NEXX />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
