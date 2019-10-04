import React from "react";
import Minor from "./Minor";
import Major from "./Major";
class Note extends React.Component {
  state = {
    minorButton: false,
    majorButton: false
  };

  clickHandlerMinor = e => {
    console.log("event", e.target);
    this.setState({ minorButton: !this.state.minorButton });
  };

  clickHandlerMajor = e => {
    console.log("event", e.target);
    this.setState({ majorButton: !this.state.majorButton });
  };

  render() {
    console.log(this.props);
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{`Your Note is: ${this.props.convNote}`}</h1>
          <button
            onClick={this.clickHandlerMinor}
            type="button"
            className="btn btn-primary"
          >
            Get Minor Scale
          </button>
          <br />

          <button
            onClick={this.clickHandlerMajor}
            type="button"
            className="btn btn-primary"
          >
            Get Major Scale
          </button>
          <br />
          <br />
          {this.state.minorButton ? <Minor root={this.props.convNote} /> : null}
          <br />

          {this.state.majorButton ? <Major root={this.props.convNote} /> : null}
        </div>
      </div>
    );
  }
}

export default Note;
