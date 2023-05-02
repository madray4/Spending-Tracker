import { Link } from 'react-router-dom';

import './css/Navbar.css'

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Spending Tracker</h1>
        </Link>
      </div>
    </header>
  )
};

export default NavBar;