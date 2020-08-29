import React from 'react';
import './App.css';
import { Loading } from './components/loading/loading.main';

function App() {
  return (
    <div className="background">


      <header className="App=header">
        <Loading color="white"/>
      </header>

      <body className="body">
        <p>
          This is a personal website about Tom
        </p>
        <a
          className="App-link"
          href="https://github.com/ppoyusecci"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github Page
        </a>
      </body>


    </div>
  );
}

export default App;
