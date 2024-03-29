import './App.css';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import WhatWeOffer from './components/pages/WhatWeOffer';
import ContactUs from './components/pages/ContactUs';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='container-fluid dvc'>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          
          <Route path="/blog" element={<Blog />}>
          </Route>
          
          <Route path="/about" element={<About />}>
          </Route>
          
          <Route path="/offer" element={<WhatWeOffer />}>
          </Route>
          
          <Route path="/contact" element={<ContactUs /> }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
