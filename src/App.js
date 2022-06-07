import './App.css';
import React from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Contact from './components/pages/Contact';
import GameDetails from './components/pages/GameDetails';

function App() {

  return (
    <div className="App">
      <div className='App___container'>
        <Nav />
              <Routes>
                    <Route 
                      path='/gamergate' element={<Landing />}>
                    </Route>
                    <Route 
                      path='/home' element={<Home />}>
                    </Route>
                    <Route 
                      path='/search' element={<Search />}>
                    </Route>
                    <Route 
                      path='/contact' element={<Contact />}>
                    </Route>
                    <Route 
                      path='/game/:id' element={<GameDetails />}>
                    </Route>
              </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
