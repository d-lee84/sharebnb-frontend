import { Route, Switch }from 'react-router-dom';
import Search from './Search';
import HomePage from './HomePage';
import Listings from './Listings';
import Messages from './Messages';
import NotFound from './NotFound';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ListingDetail from './ListingDetail';
import AddListingForm from './AddListingForm';

/**  Routes Component
 * Props:
 * State:
 *
 * App -> Routes
 */
function Routes({currentUser, loginUser, registerNewUser, addListing}){
  return(
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginForm loginUser={loginUser} />
      </Route>
      <Route exact path="/register">
        <RegisterForm registerNewUser={registerNewUser} />
      </Route>
      <Route exact path="/listings/add">
        <AddListingForm addListing={addListing} />
      </Route>
      <Route exact path="/listings/:id">
        <ListingDetail currentUser={currentUser} />
      </Route>
      <Route exact path="/listings">
        <Listings />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/messages/guest">
        <Messages isHost={false} currentUser={currentUser} />
      </Route>
      <Route exact path="/messages/host">
        <Messages isHost={true} currentUser={currentUser} />
      </Route>
     <Route><NotFound/></Route>
    </Switch>
  );
}
export default Routes;
