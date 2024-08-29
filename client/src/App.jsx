import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import CreateNewPattern from './views/CreateNewPattern';
import OnePattern from './views/OnePattern';
import EditPattern from './views/EditPattern';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patterns/create-new" element={<CreateNewPattern />} />
          <Route path="/patterns/:id" element={<OnePattern />} />
          <Route path="/patterns/:id/edit" element={<EditPattern />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App