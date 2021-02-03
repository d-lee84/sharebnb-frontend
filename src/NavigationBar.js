import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
/**  NavBar Component
 * Props:
 * State:
 *
 * App -> NavBar
 */
function NavigationBar({currentUser}){
  return(
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/"> ShareBnB </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/listings"> Listings </Nav.Link>
          <Nav.Link as={NavLink} to="/messages"> Messages </Nav.Link>
        </Nav>
        { currentUser
          ? "" // TODO: Authenticated only routes go here!
          : <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/login"> Login </Nav.Link>
              <Nav.Link as={NavLink} to="/register"> Register </Nav.Link>
          </Nav>}
      </Navbar.Collapse>
    </Navbar>
    </nav>
  );
}
export default NavigationBar;
