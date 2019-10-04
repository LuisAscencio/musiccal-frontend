import React from "react";
import { note, interval, transpose, distance } from "tonal";
class Major extends React.Component {
  render() {
    let majorScale = {};
    majorScale = {
      1: this.props.root,
      2: transpose(this.props.root, "2M"),
      3: transpose(this.props.root, "3M"),
      4: transpose(this.props.root, "4m"),
      5: transpose(this.props.root, "5m"),
      6: transpose(this.props.root, "6M"),
      7: transpose(this.props.root, "7M")
    };
    return (
      <div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Major Scale:</h5>
              <p className="card-text">
                {majorScale[1]}, {majorScale[2]}, {majorScale[3]},{" "}
                {majorScale[4]},{majorScale[5]}, {majorScale[6]},{" "}
                {majorScale[7]}
              </p>
            </div>
          </div>
        </div>
      </div>
      // <h2>
      //   {majorScale[1]}, {minorScale[2]}, {minorScale[3]}, {minorScale[4]},
      //   {minorScale[5]}, {minorScale[6]}, {minorScale[7]}
      // </h2>
      //   </div>
    );

    // minorScale.push(this.props.root);
    // minorScale.push(transpose(`${this.props.root}`, "2P"));
    // console.log(minorScale);
  }
}

// this.props.root ? this.props.root : null;

export default Major;
