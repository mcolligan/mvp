import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      password1: '',
      password2: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post('/signup', this.state)
      .then((result) => {
        // redirect to other endpoint
        console.log('sucess');
      })
      .catch((err) => {
        // does some error stuff
        console.log('nope')
      })
  }

  render() {
    const { fName, lName, email, password1, password2, error } = this.state;

    const isInvalid = password1 !== password2 || password1 === '' || email === '';

    return (
      <div className="container border border-dark rounded p-1">
        <p><u>Sign up to utilize all the features!</u></p>
        <form>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input className="form-control"
                  name="fName"
                  value={fName}
                  onChange={this.onChange}
                  placeholder="First Name">
                </input>
              </div>
              <div className="col">
                <input className="form-control"
                  name="lName"
                  value={lName}
                  onChange={this.onChange}
                  placeholder="Last Name">
                </input>
              </div>
            </div>
          </div>
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
            <div className="row">
              <div className="col">
                <input className="form-control"
                  name="password1"
                  value={password1}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password">
                </input>
              </div>
              <div className="col">
                <input className="form-control"
                  name="password2"
                  value={password2}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Confirm Password">
                </input>
              </div>
            </div>
          </div>
          <button disabled={isInvalid} type="submit" className="btn btn-info" onClick={this.onSubmit}>Create Account</button>
          <p>
            Already have an account? <Link to='/signin'>Log in!</Link>
          </p>
        </form>
      </div>
    )
  }
}