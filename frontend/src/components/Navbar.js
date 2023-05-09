import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

import './css/Navbar.css'

const NavBar = () => {
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Spending Tracker</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleLogout}>
              Log out
            </button>
          </div>
          <div>
            <Link to="/add-entry">Create</Link>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        </nav>
      </div>
    </header>
  )
};

export default NavBar;