import './App.css';
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherPage from './components/WeatherPage';
import HeaderRouter from './components/HeaderRouter';

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
            {localStorage.getItem("userName") &&
              <Route exact path="/WeatherPage">
                <WeatherPage />
              </Route>}
          </Switch>

        </Router>
      </div>
    </div >
  );
}

export default App;
