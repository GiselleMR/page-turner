import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search-books">Search Books</Link></li>
        <li><Link to="/my-booklist">My Book List</Link></li>
        <li><Link to="/review">Reviews</Link></li>
        <li>Hello, {user.name}!</li>
        <li><button onClick={handleLogOut}>Logout</button></li>
      </ul>
    </nav>
  );
}