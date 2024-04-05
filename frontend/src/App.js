import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './homePage/Home';

import Copper from './copper/pages/Copper';
import Tin from './tin/pages/Tin';
import Copper200 from './copper/pages/Copper200';
import Cu200Pure from './copper/pages/Cu200Pure';
import Copper01 from './copper/pages/Copper01';
import Copper05 from './copper/pages/Copper05';
import Copper09 from './copper/pages/Copper09';
import Copper09DH from './copper/pages/Copper09DH';
import CuChemX from './copper/pages/CuChemX';
import CuEbara from './copper/pages/CuEbara';
import SN_NEXX from './tin/pages/SN_NEXX';
import WEDGES from './tin/pages/Wedges';

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
              <Route path="/cup200-3Pure" element={<Cu200Pure />} />
              <Route path="/copper01" element={<Copper01 />} />
              <Route path="/copper05" element={<Copper05 />} />
              <Route path="/copper09" element={<Copper09 />} />
              <Route path="/copper09DH" element={<Copper09DH />} />
              <Route path="/cuChemX" element={<CuChemX />} />
              <Route path="/cu-ebara" element={<CuEbara />} />
              <Route path="/sn_nexx" element={<SN_NEXX />} />
              <Route path='/lam-sn' element={<WEDGES />} />
              {/* <Route path="/copper01/list" element={<ListCopper01 />} /> */}
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
