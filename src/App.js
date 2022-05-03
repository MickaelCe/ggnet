import './App.css';
import React from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Contact from './components/pages/Contact';


function App() {

  return (
    <div className="App">
      <div className='App___container'>
        <Nav />
              <Routes>  
                    <Route 
                      path='/' element={<Home />}>
                    </Route>
                    <Route 
                      path='/search' element={<Search />}>
                    </Route>
                    <Route 
                      path='/contact' element={<Contact />}>
                    </Route>
              </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
