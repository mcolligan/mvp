import React from 'react';
import axios from 'axios';

import SearchBox from './searchBox.jsx'
import TrailsList from './trailsList.jsx';
import tempData from '../../tempData.json';

class Trails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trails: [...tempData.trails],
      loc: tempData.trails[0].location
    };
  }

  searchClick(e, term) {
    e.preventDefault();
    axios.get('/trails', {
      params: {
        loc: term
      }
    }).then((data) => {
      // update state with trails
      this.setState({
        trails: [...data.data.trails],
        loc: term
      })
    })
  }

  render() {
    return (
      <div className="container">
        <SearchBox searchClick={this.searchClick.bind(this)} />
        <div className="container p-1">
          <h4><em><u>Trails Near: {this.state.loc}</u></em></h4>
          <div className="card-group d-flex flex-wrap p-1">
            {this.state.trails.map((el, i) =>
              <TrailsList key={i} info={el} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Trails;