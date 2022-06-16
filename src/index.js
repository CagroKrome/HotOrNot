// Imports
import React from 'react';
import { createRoot } from 'react-dom/client'; // because of some shit deprecated
// import axios from 'axios'; // for requests
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // for routing
import { JokeProvider } from './contexts/JokeContext'; // context
import Home from './pages/Home';
import Stats from './pages/Stats';
import './index.css'
import Info from './pages/Info';

const container = document.getElementById('root')
const root = createRoot(container)

function App() {
  return (
        <JokeProvider>
        <Router>
            <Routes>
                <Route path='/' element={ <Home /> } ></Route>
                <Route path='stats' element={ <Stats /> } ></Route>
                <Route path='info' element={ <Info /> } ></Route>
            </Routes>
        </Router>
      </JokeProvider>
  )
}

root.render(<App/>)