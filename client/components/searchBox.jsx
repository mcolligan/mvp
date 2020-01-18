import React from 'react';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
  }

  handleChange(e) {
    this.setState({term: e.target.value});
  }

  searchClick(e) {
    e.preventDefault();
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
              <input className="btn-outline-info" type="submit" onClick={this.searchClick.bind(this)}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBox;