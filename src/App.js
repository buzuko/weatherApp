import './App.css';
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherPage from './components/WeatherPage';
import HeaderRouter from './components/HeaderRouter';
import Mador from "./components/mador"

function App() {
  return (
    <div className="App">
      <div className='new'>
        <Router >
          <HeaderRouter />
          <Switch >
            <Route exact path="/LogIn">
              <LogIn />
            </Route>
            <Route exact path="/WeatherPage">
              <WeatherPage />
            </Route>
            <Route exact path="/Mador">
              <Mador />
            </Route>
          </Switch>

        </Router>
      </div>
    </div >
  );
}

export default App;
