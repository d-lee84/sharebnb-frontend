import { Route, Switch }from 'react-router-dom';
import Search from './Search';
import HomePage from './HomePage';
import Listings from './Listings';
import Messages from './Messages';
import NotFound from './NotFound';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

/**  Routes Component
 * Props:
 * State:
 *
 * App -> Routes
 */
function Routes({loginUser}){
  return(
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginForm loginUser={loginUser} />
      </Route>
      <Route exact path="/register">
        <RegisterForm />
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
