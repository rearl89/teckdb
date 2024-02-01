import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';

import Copper from './pages/copper/Copper';
import Tin from './pages/tin/Tin';
import Copper01 from './pages/copper/Copper01';
import CuChemX from './pages/copper/CuChemX';
import SN_NEXX from './pages/tin/SN_NEXX';
import ListCopper01 from './pages/copper/ListCopper01';
import ListSnNexx from './pages/tin/ListSN_NEXX';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className='pages'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/copper" element={<Copper />} />
              <Route path="/tin" element={<Tin />} />
              <Route path="/copper01" element={<Copper01 />} />
              <Route path="/cuChemX" element={<CuChemX />} />
              <Route path="/sn_nexx" element={<SN_NEXX />} />
              <Route path="/copper01/list" element={<ListCopper01 />} />
              <Route path="/sn_nexx/list" element={<ListSnNexx />} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
