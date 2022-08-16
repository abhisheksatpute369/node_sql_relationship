
import './App.css';
import Company from './components/company';
import Companydetails from './components/companydetails';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Company />} />
        <Route path='company/:id' element={<Companydetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
