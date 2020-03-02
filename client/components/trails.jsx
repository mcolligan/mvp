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
      activeIndex: 0,
      loc: tempData.trails[0].location
    };

    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);

  }

  // Search button click
  searchClick(e, term) {
    e.preventDefault();
    axios.get('/trails', {
      params: { loc: term }
    }).then((data) => {
      this.setState({
        trails: [...data.data.trails],
        loc: term
      })
    })
  }

  // Carousel next click
  nextClick() {
    if (this.state.activeIndex < this.state.trails.length - 1) {
      this.setState({
        activeIndex: ++this.state.activeIndex
      })
    } else {
      this.setState({
        activeIndex: 0
      })
    }
  }

  // Carousel previous click
  prevClick() {
    if (this.state.activeIndex > 0) {
      this.setState({
        activeIndex: --this.state.activeIndex
      })
    } else {
      this.setState({
        activeIndex: this.state.trails.length - 1
      })
    }
  }
  render() {
    let sliderStyle ={
      transform:`translateX(${this.state.activeIndex * -100}%)`,
      transition: '0.2s'
    }
    return (
      <div className="container">
        <SearchBox searchClick={this.searchClick.bind(this)} />
        <div className="container p-1">
          <h4><em><u>Trails Near: {this.state.loc}</u></em></h4>
          <div className="container" style={{ overflown: 'hidden'}}>
            <div className="carousel slide" data-ride="carousel">
              <div className="carousel-inner row" >
                <div className="card-group d-flex flex-nowrap p-1">
                  {this.state.trails.map((el, i) =>
                    <div key={i} className="carousel item" style={sliderStyle}>
                      <TrailsList key={i} info={el} />
                    </div>
                  )}
                </div>
              </div>
              <a className="carousel-control-prev" role="button" data-slide="prev" onClick={this.prevClick}>
                <span className="carousel-control-prev-icon"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" role="button" data-slide="prev" onClick={this.nextClick}>
                <span className="carousel-control-next-icon"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Trails;

{/* <div className="box">
        <div id="cards" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner row w-100">
            <div className="card-group d-flex flex-nowrap overflow-auto"></div> */}

// One per line -- https://mdbootstrap.com/docs/jquery/javascript/carousel/