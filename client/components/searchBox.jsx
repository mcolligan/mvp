import React from 'react';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  handleChange(e) {
    this.setState({term: e.target.value});
  }

  clicked(e) {
    this.props.searchClick(e, this.state.term)
  }

  render() {
    return (
      <div className="container border border-dark rounded p-1">
        <form>
          <div className="form-row col-6">
            <div className="col">
              <input className="form-control form-control-sm" type="text" onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <input className="btn-outline-info" type="submit" onClick={this.clicked.bind(this)} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
