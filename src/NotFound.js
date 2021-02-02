import {Link} from 'react-router-dom';
// import Search from './Search';
// import HomePage from './HomePage';
// import Listings from './Listings';
// import Messages from './Messages';
// import NotFound from './NotFound';

/**  NotFound Component
 * Props:
 * State:
 *
 * App -> NotFound
 */
function NotFound(){
  return(
    <div>
      <h1>How did you get here?</h1>
      <Link to="/"> Go home, you're lost. </Link>
    </div>
  );
}
export default NotFound;
