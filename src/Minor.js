import React from "react";
import { note, interval, transpose, distance } from "tonal";
class Minor extends React.Component {
  render() {
    let minorScale = {};
    minorScale = {
      1: this.props.root,
      2: transpose(this.props.root, "2M"),
      3: transpose(this.props.root, "3m"),
      4: transpose(this.props.root, "4m"),
      5: transpose(this.props.root, "5m"),
      6: transpose(this.props.root, "6m"),
      7: transpose(this.props.root, "7m")
    };
    return (
      <div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Minor Scale:</h5>
              <p className="card-text">
                {minorScale[1]}, {minorScale[2]}, {minorScale[3]},{" "}
                {minorScale[4]},{minorScale[5]}, {minorScale[6]},{" "}
                {minorScale[7]}
              </p>
            </div>
          </div>
        </div>
      </div>
      // <h2>
      //   {minorScale[1]}, {minorScale[2]}, {minorScale[3]}, {minorScale[4]},
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

export default Minor;
