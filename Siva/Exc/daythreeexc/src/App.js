import logo from './logo.svg';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>




      <nav>
        <ul>
          <li>
            <Link to={`student`}>Your Name</Link>
          </li>
          <li>
            <Link to={`student  /2`}>Your Friend</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
