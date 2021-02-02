import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import NavigationBar from './NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/** App component
 *
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
