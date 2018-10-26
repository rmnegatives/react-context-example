import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactContextApp from './context-sixteen-three/ReactContextApp';

function ReactPOC() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react-context-sixteen-three">React Context</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/react-context-sixteen-three" component={ReactContextApp} />
      </div>
    </Router>
  );
}

function Home(params) {
  return <div>Home</div>;
}
export default ReactPOC;
