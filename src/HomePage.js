import {Jumbotron, Container} from 'react-bootstrap';
/**  HomePage Component
 * Props:
 * State:
 *
 * App -> HomePage
 */
function HomePage(){
  return(
    <Jumbotron fluid> 
      <Container>
        <h1> Welcome to ShareBnB!</h1>
        <p> Book an outdoor space for a Covid-safe event. </p>
        <img 
          style={{height:"70vh"}} 
          className="img-fluid rounded" 
          alt="ShareBnB" 
          src="/frontpage.jpeg"/>
        <p>
          (Hey AirBnb, please hire us)
        </p>
      </Container>
    </Jumbotron>
  );
}
export default HomePage;
