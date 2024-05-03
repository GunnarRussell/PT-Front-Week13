import Navbar from './components/navbar/navbar.js';
import Main from './components/main/main.js';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* header */}
      <header className="navbar">
        <Navbar />
      </header>
      {/* main body (contains login form) */}
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
