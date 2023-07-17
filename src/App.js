import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from '../src/components/Header/Header'
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import ProfileView from './views/ProfileView/ProfileView';
import HomeView from './views/HomeView/HomeView';
import PostDetailView from './views/PostDetailView/PostDetailView';
import Footer from './components/Footer/Footer';
import SearchView from './views/SearchView/SearchView';
import PrivateZone from './guards/PrivateZone';
import NotFoundView from './views/NotFoundView/NotFoundView';
import NewPostView from './views/NewPostView/NewPostView';






function App() {
  return (
   <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<RegisterView />} />
          <Route path='/login' element={<LoginView />} />
          <Route 
            path='/profile' 
            element= {
            <PrivateZone><ProfileView /></PrivateZone>
            } />
          <Route path='/home' element={<PrivateZone><HomeView /></PrivateZone>} />
          <Route path='/post/:id' element={<PrivateZone><PostDetailView /></PrivateZone>} />
          <Route path='/search/:title' element={<PrivateZone><SearchView /></PrivateZone>} />
          <Route path= '/newPost' element={<PrivateZone><NewPostView/></PrivateZone>} />
          <Route path='*' element={<NotFoundView />} />
        </Routes> 
        <Footer />
    </BrowserRouter>
   </>
  );
}

export default App;
