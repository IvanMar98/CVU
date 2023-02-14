import { Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Inicio from './components/Inicio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Login />}/>
        <Route path='/inicio' element = {<Inicio />}></Route>
      </Routes>
    </div>
  )
}

export default App
