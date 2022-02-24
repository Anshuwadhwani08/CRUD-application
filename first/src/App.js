
import './App.css';
import Navbar from './components/navbar';
import Table from './components/table';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';
import {BrowserRouter , Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <>
    <BrowserRouter>
    <Fragment>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Table/>}/>
    <Route exact path='/Adduser' element={<Adduser/>}/>
    <Route exact path='/edit/:id' element={<Edituser/>}/>
    </Routes>
    </Fragment>
    </BrowserRouter>
    </>
  );
}



export default App;
