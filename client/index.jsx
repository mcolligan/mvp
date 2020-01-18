import React from 'react';
import ReactDOM from 'react-dom';

import Trails from './components/trails.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>MTB Baby</h1>
        </div>
          <Trails />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));