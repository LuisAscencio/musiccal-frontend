import React from "react";
import Form from "./Form";
import MicInput from "./MicInput";

class Home extends React.Component {
  state = {
    micButton: false,
    valueButton: false
  };

  clickHandlermicButton = e => {
    console.log("event", e.target);
    this.setState({ micButton: !this.state.micButton, valueButton: false });
  };

  clickHandlervalueButton = e => {
    console.log("event", e.target);
    this.setState({ valueButton: !this.state.valueButton, micButton: false });
  };

  render() {
    return (
      <>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to MusicCal!</h1>
          <p className="lead">
            Convert frequencies to notes or notes to frequencies!
          </p>
          <hr className="my-4"></hr>
          <p className="lead">Use your mic input or enter a value.</p>
          <p className="lead">
            <button
              onClick={this.clickHandlermicButton}
              type="button"
              className="btn btn-primary"
            >
              Mic Input
            </button>
          </p>
          <p className="lead">
            <button
              onClick={this.clickHandlervalueButton}
              type="button"
              className="btn btn-primary"
            >
              Enter Value
            </button>
          </p>
          {this.state.valueButton ? <Form /> : null}
          {this.state.micButton ? <MicInput /> : null}
        </div>
      </>
    );
  }
}

export default Home;
