import './App.css';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './Components/home';
import Signup from './Components/user_registration';
import Signin from './Components/user_signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/signin">
            <Signin/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
