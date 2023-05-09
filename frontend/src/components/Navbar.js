import { Link } from 'react-router-dom';

import './css/Navbar.css'

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Spending Tracker</h1>
        </Link>
        <div className="navbar-buttons">
          <Link to="/add-entry">
            <h2>Create</h2>
          </Link>
          <Link to="/login">
            <h2>Log in</h2>
          </Link>
          <Link to="/signup">
            <h2>Sign up</h2>
          </Link>
        </div>
      </div>
    </header>
  )
};

export default NavBar;