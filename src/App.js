import React from 'react';
import './App.css';
import StudentList from './Component/StudentList';
import FavouritList from './Component/FavouritList';
import Context from './Component/Context';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
    return (
       <>
       <Context>
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<StudentList/>}></Route>
       <Route path="/fav" element={<FavouritList/>}></Route>
       </Routes>
       </BrowserRouter>
       </Context>
       </>
    )
}

export default App;
