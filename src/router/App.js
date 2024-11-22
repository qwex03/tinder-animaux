import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FirstPage from '../page/FirstPage';
import LoginPage from '../page/Login';
import RegisterPage from '../page/Register';
import Choix from '../page/Choix';
import ListAnimals from '../page/ListAnimal';
import Test from '../page/test';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/choix" element={<Choix/>}/>
        <Route path="/animals" element={<ListAnimals/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;

