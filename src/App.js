import React from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './Content/Content'
import NavBar from './nav/Nav'

function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Content />
        </main>
        <footer>
          STUB FOOTER
        </footer>
      </Router>
    </div>
  );
}

export default App;
