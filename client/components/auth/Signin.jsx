import React from 'react';
import { Link } from 'react-router-dom';
// import { withFirebase } from '../firebase.jsx';

export default class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {

  };

  onChange(e) {
    this.setState({ email: e.target.value })
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="container border border-dark rounded p-1">
        <p><u>Sign in to see your trails!</u></p>
        <form>
          <div className="form-group">
            <input className="form-control"
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
              placeholder="Email Address">
            </input>
          </div>
          <div className="form-group">
            <input className="form-control"
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password">
            </input>
          </div>
          <button type="submit" class="btn-outline-info">Submit</button>
        </form>
        <p>
          Don't have an account? <Link to='/signup'>Sign Up!</Link>
        </p>
      </div>
    )
  }
}