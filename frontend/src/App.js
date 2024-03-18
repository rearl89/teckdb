import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './homePage/Home';

import Copper from './copper/pages/Copper';
import Tin from './tin/pages/Tin';
import Copper01 from './copper/pages/Copper01';
import Copper05 from './copper/pages/Copper05'
import CuChemX from './copper/pages/CuChemX';
import SN_NEXX from './tin/pages/SN_NEXX';
import Copper200 from './copper/pages/Copper200';
// import ListCopper01 from './copper/pages/ListCopper01';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className='pages'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/copper" element={<Copper />} />
              <Route path="/tin" element={<Tin />} />
              <Route path="/cup200-3" element={<Copper200 />} />
              <Route path="/copper01" element={<Copper01 />} />
              <Route path="/copper05" element={<Copper05 />} />
              <Route path="/cuChemX" element={<CuChemX />} />
              <Route path="/sn_nexx" element={<SN_NEXX />} />
              {/* <Route path="/copper01/list" element={<ListCopper01 />} /> */}
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
