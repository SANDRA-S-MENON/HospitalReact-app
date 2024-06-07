import logo from './logo.svg';
import './App.css';
import AddPatient from './components/AddPatient';
import SearchPatient from './components/SearchPatient';
import DeletePatient from './components/DeletePatient';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPatient/>}/>,
      <Route path='/search' element={<SearchPatient/>}/>,
      <Route path='/delete' element={<DeletePatient/>}/>,
      <Route path='/view' element={<ViewAll/>}/>,
    </Routes>
    </BrowserRouter>
  );
}

export default App;
