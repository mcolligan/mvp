import React from 'react';
import TrailsList from './trailsList.jsx';
import tempData from '../../tempData.json';

class Trails extends React.Component {
  constructor() {
    super();
    this.state = {
      trails: [...tempData.trails],
      loc: tempData.trails[0].location
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <h4><em><u>Trails Near: {this.state.loc}</u></em></h4>
        <div className="card-group d-flex flex-wrap">
          {this.state.trails.map((el, i) =>
            <TrailsList key={i} info={el} />
          )}
        </div>
      </div>
    )
  }
}

export default Trails;