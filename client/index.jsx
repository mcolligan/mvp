import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/nav/Navigation.jsx';
import Trails from './components/trails.jsx';

import Signin from './components/auth/Signin.jsx';
import Signup from './components/auth/Signup.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>MTB Trail Companion</h2>
        </div>
        <Trails />
        <div className="container">
          <Router>
            <Switch>
                {/* <Navigation /> */}
                <Route exact path='/' component={Signin} />
                <Route path='/signin' component={Signin} />
                <Route path='/signup' component={Signup} />
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));