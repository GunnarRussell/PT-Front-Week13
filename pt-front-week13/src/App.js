
// Using create-react-app, create a new React project. Create 
// a LoginForm component that contains the following:
//  - Username and password input fields, an h3 that says Log 
//    In, with a border. Style the component using the 
//    default generated CSS file.
//  - Create a Navigation component that contains links 
//    styled like a navbar.
//  - Put the Navigation component at the top of the page and 
//    the LoginForm in the center of the page.


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
