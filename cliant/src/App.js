
import './App.css';
import Company from './components/company';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
