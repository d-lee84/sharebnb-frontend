import { NavLink }from 'react-router-dom';
// import Search from './Search';
// import HomePage from './HomePage';
// import Listings from './Listings';
// import Messages from './Messages';
// import NotFound from './NotFound';

/**  NavBar Component
 * Props:
 * State:
 *
 * App -> NavBar
 */
function NavBar(){
  return(
    <nav>
      <NavLink to='/'> Home </NavLink>
      <NavLink to='/listings'> Listings </NavLink>
      <NavLink to='/messages'> Messages </NavLink>
    </nav>
  );
}
export default NavBar;
