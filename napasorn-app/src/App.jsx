//import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import UserCard from './components/UserCard';
import JSXExamples from './components/JSXExamples';

function App() {
  return (
    <div className="App">
      <JSXExamples/>
      <UserCard/>
      <TodoList/>
      
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
