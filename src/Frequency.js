import React from "react";

class Frequency extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">
            {`Your Frequency is: ${this.props.convFrequency.toFixed(2)} Hz`}
          </h1>
        </div>
      </div>
    );
  }
}

export default Frequency;
