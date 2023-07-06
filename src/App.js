import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from '../src/components/Header/Header'
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';



function App() {
  return (
   <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/register' element={<RegisterView />} />
          <Route path='/login' element={<LoginView />} />
        </Routes> 
    </BrowserRouter>
   </>
  );
}

export default App;
