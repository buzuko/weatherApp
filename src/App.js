import './App.css';
import { React, useEffect } from 'react';
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherPage from './components/WeatherPage';
import HeaderRouter from './components/HeaderRouter';
import History from './components/History';
import { useAllCities } from './addOns/dataHooks';

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
