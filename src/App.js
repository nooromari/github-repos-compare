import React from 'react';
import './App.css';
import RepoCard from './components/repoCard/repoCard.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github Repos Compare</h1>
      </header>
      <main>
        <RepoCard />
      </main>
      <footer>
        All rights received &copy; 2022 Noor Al-Omari
      </footer>
    </div>
  );
}

export default App;
