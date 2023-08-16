import logo from './logo.svg';
import './App.css';
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
