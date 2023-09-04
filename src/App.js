import './App.css';
import { React } from 'react';
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherPage from './components/WeatherPage';
import HeaderRouter from './components/HeaderRouter';
import Mador from "./components/mador"
import History from './components/History';

function App() {


  return (
    <div className="App">
      <div className='new'>
        <Router >
          <HeaderRouter />
          <Switch >
          <Route exact path="/">
              <LogIn />
            </Route>
            <Route exact path="/LogIn">
              <LogIn />
            </Route>
            <Route exact path="/WeatherPage">
              <WeatherPage />
            </Route>
            <Route exact path="/Mador">
              <Mador />
            </Route>
            <Route exact path="/History">
              <History />
            </Route>
          </Switch>

        </Router>
      </div>
    </div >
  );
}

export default App;
