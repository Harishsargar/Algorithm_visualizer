import React from 'react';
import { Link } from 'react-router-dom';
import '../pathFinder/pathFinder.css';

export default class PathfindingVisualizer extends React.Component {
  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      margin : '200px 0px 0px',
      textAlign: 'center'
    };

    return (
        <>
      <div style={containerStyle}>
        <h1>Pathfinding Visualizer (Coming Soon)</h1>
        
      </div>
      <div className="button-container">
      <Link to="/" className="button-83">Back to Home</Link>  {/* Link to Home Page */}
  </div>
    <footer><br/>
        <p>{`( Developed by ) => HARISH SARGAR`}</p>      
    </footer> 
  </>
    );
  }
}
