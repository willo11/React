import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">PEPE Y SANTIAGO ME LA PELAN MUCHOOOOOOO</NavbarBrand>
        </div>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esa tal <code>DUALIPA</code> esta sobrevalorada.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          CHANGE MY MIND!
        </a>
      </header>
    </div>
  );
}

export default App;
