import logo from './logo.svg';
import './App.css';
import AddPatient from './components/AddPatient';
import SearchPatient from './components/SearchPatient';
import DeletePatient from './components/DeletePatient';

function App() {
  return (
    <div>
      <AddPatient/>
      <SearchPatient/>
      <DeletePatient/>
      
    </div>
  );
}

export default App;
