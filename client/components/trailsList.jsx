import React from 'react';

const TrailsList = (props) => {
  console.log(props);
  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="card" style={{ width: 17 + 'rem', height: 31 + 'rem' }}>
          <img src={props.info.imgMedium} className="card-img-top" style={{ height: 14 + 'rem' }}></img>
          <div className="card-body flex-fill">
            <p className="card-subtitle mb-2 text-muted border-bottom text-right"><small><em><b>{props.info.name}</b></em></small></p>
            <p className="card-text text-left"><b>{props.info.summary}</b></p>
            <div>
              {props.info.difficulty === "greenBlue" &&
                <div className="row">
                  <p className="card-text text-left" style={{ color: 'green' }}>&#x25CF;</p>
                  <p className="card-text text-left" style={{ color: 'blue' }}>&#x25A0;</p>
                </div>
              }
              {props.info.difficulty === 'blueBlack' &&
                <div className="row">
                  <p className="card-text text-left" style={{ color: 'blue' }}>&#x25A0;</p>
                  <p className="card-text text-left" style={{ color: 'black' }}>&#x25C8;</p>
                </div>
              }
              {props.info.difficulty === 'blue' &&
                <div className="row">
                  <p className="card-text text-left" style={{ color: 'blue' }}>&#x25A0;</p>
                </div>
              }
              {props.info.difficulty === 'black' &&
                <div className="row">
                  <p className="card-text text-left" style={{ color: 'black' }}>&#x25C8;</p>
                </div>
              }
              {props.info.difficulty === 'dblack' &&
                <div className="row">
                  <p className="card-text text-left" style={{ color: 'black' }}>&#x25C8;</p>
                  <p className="card-text text-left" style={{ color: 'black' }}>&#x25C8;</p>
                </div>
              }
              <p className="card-subtitle mb-2 text-muted border-bottom text-left"><small><em><b>Conditions: {props.info.conditionStatus}</b></em></small></p>
              <p className="card-text"><small className="text-muted text-right">Last update: {props.info.conditionDate}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default TrailsList;