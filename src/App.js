import './App.css';
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherPage from './components/WeatherPage';

function App() {
  return (
    <div className="App">
      <div className='new'>
        <Router >

          <Switch >
            <Route exact path="/LogIn">
              <LogIn />
            </Route>
            <Route exact path="/WeatherPage">
              <WeatherPage />
            </Route>
          </Switch>

        </Router>
      </div>
    </div >
  );
}

export default App;
