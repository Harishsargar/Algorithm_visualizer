import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SortingVisualizer from './sorting_visualizer/sortingVisualizer';

import PathfindingVisualizer from './pathFinder/pathFinderAnimation'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorting" element={<SortingVisualizer />} />
          <Route path="/pathfinding" element={<PathfindingVisualizer />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div className="animated-background"></div> {/* Add this line */}
      <div className="home-page">
        <h1>Welcome to the Visualization Tool</h1>
        <div className="button-container">
          <Link to="/sorting">
            <button className="button-54">Sorting Visualizer</button>
          </Link>
          <Link to="/pathfinding">
            <button className="button-54">Pathfinding Visualizer</button>
          </Link>
        </div>
        <footer>
          <br/>
          <p>{`( Developed by ) => HARISH SARGAR`}</p>      
        </footer> 
      </div>
      
    </div>
  );
}


export default App;
