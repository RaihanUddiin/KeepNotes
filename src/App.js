
import { Routes } from 'react-router-dom';
import './App.css';
import AddNotes from './Components/AddNotes';
import AllNotes from './Components/AllNotes';
import Navbar from './Components/Navbar'
import Router from './Hooks/Routes';

function App() {


  return (
    <div className="App">

      <Navbar />
      <Router />
    </div>
  );
}

export default App;
