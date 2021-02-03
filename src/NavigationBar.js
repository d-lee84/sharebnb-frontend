import {Navbar, Nav} from 'react-bootstrap';

/**  NavBar Component
 * Props:
 * State:
 *
 * App -> NavBar
 */
function NavigationBar(){
  return(
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/"> ShareBnB </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/listings"> Listings </Nav.Link>
          <Nav.Link href="/messages"> Messages </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/login"> Login </Nav.Link>
          <Nav.Link href="/register"> Register </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </nav>
  );
}
export default NavigationBar;
