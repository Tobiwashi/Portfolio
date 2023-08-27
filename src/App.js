import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
