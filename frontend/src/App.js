import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import CUP300_3_01 from './pages/CuP300_3_01';
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
            <Route path="/cup300-3-01" element={<CUP300_3_01 />} />
            <Route path="/sn-nexx" element={<SN_NEXX />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
