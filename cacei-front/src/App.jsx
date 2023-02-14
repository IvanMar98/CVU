import { Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Header from './components/Header';
import Registro from './components/Registro';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element = {<Login />}/>
        <Route path='/inicio' element = {<Inicio />}></Route>
        <Route path='/registrate' element = {<Registro />}></Route>
      </Routes>
    </div>
  )
}

export default App
