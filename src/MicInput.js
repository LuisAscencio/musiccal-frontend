import React from "react";
import { ReactMic } from "react-mic";

class MicInput extends React.Component {
  state = { record: false };

  startRecording = () => {
    this.setState({
      record: !this.state.record
    });
  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop(recordedBlob) {
    let recording = recordedBlob;

    console.log(" stop recordedBlob is: ", recording);
  }

  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#00000"
          backgroundColor="#007bff"
        />
        <br />
        <button
          className={this.state.record ? "btn btn-danger" : "btn btn-success"}
          onClick={this.startRecording}
          type="button"
        >
          {this.state.record ? "Stop" : "Start"}
        </button>
      </div>
    );
  }
}

export default MicInput;
