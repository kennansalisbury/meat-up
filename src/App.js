import React from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './Content/Content'
import Nav from './nav/Nav'

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main>
        <Content />
      </main>
      <footer>
        STUB FOOTER
      </footer>
    </Router>
  );
}

export default App;
