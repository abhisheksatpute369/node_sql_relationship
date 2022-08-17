
import './App.css';
import Company from './components/company';
import Companydetails from './components/companydetails';
import Bikes from './components/bikes';
import Dealer from './components/dealer';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Company />} />
        <Route path='company/:id' element={<Companydetails />} />
        <Route path='bikes/:id' element= {<Bikes />} />
        <Route path='dealer/:id' element= {<Dealer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
