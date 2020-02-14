import React from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './Content/Content'
import NavBar from './nav/Nav'
import {Container} from 'reactstrap'

function App() {
  return (
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
  );
}

export default App;
