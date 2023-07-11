import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from '../src/components/Header/Header'
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import ProfileView from './views/ProfileView/ProfileView';
import HomeView from './views/HomeView/HomeView';
import PostDetailView from './views/PostDetailView/PostDetailView';
import Footer from './components/Footer/Footer';



function App() {
  return (
   <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<RegisterView />} />
          <Route path='/login' element={<LoginView />} />
          <Route path='/profile' element={<ProfileView />} />
          <Route path='/home' element={<HomeView />} />
          <Route path='/post/:id' element={<PostDetailView />} />
        </Routes> 
        <Footer />
    </BrowserRouter>
   </>
  );
}

export default App;
