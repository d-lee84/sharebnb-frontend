import { Route, Switch }from 'react-router-dom';
import Search from './Search';
import HomePage from './HomePage';
import Listings from './Listings';
import Messages from './Messages';
import NotFound from './NotFound';

/**  Routes Component
 * Props:
 * State:
 *
 * App -> Routes
 */
function Routes(){
  return(
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/listings">
        <Listings />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/messages">
        <Messages />
      </Route>
     <Route><NotFound/></Route>
    </Switch>
  );
}
export default Routes;
