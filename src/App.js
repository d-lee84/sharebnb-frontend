import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import NavBar from './NavBar';
import './App.css';

/** App component
 *
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
