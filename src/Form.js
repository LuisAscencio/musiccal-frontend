import React from "react";
import { note, interval, transpose, distance } from "tonal";
import Frequency from "./Frequency";
import Note from "./Note";

class Form extends React.Component {
  state = {
    frequency: "",
    note: ""
  };

  changeHandler = e => {
    console.log("changing", e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getNoteFromFrequency = frequency => {
    let noteOrder = "G# A A# B C C# D D# E F F# G".split(" ");
    let n = Math.round(49 + (12 * Math.log(frequency / 440)) / Math.log(2));
    let note = noteOrder[n % noteOrder.length];
    let index = Math.ceil((n - 3) / noteOrder.length);

    return note + index;
  };

  submitHandler = e => {
    e.preventDefault();
    let foundNote = this.getNoteFromFrequency(this.state.frequency);

    this.setState({
      convFrequency: note(`${this.state.note}`).freq,
      convNote: foundNote,
      frequency: "",
      note: ""
    });
    // console.log("note:", this.state.conNote);

    // console.log("confreq:", this.state.convFrequency);
    // console.log("connote:", this.state.convNote);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <br />
          Frequency:
          <br />
          <br />
          <input
            type="text"
            placeholder="enter frequency here"
            name="frequency"
            value={this.state.frequency}
            onChange={this.changeHandler}
          />
          <br />
          <br />
          Note:
          <br />
          <br />
          <input
            type="text"
            placeholder="enter note here"
            name="note"
            value={this.state.note}
            onChange={this.changeHandler}
          />
          <br />
          <input type="submit" value="submit" className="btn btn-dark" />
          <br />
          <br />
          {this.state.convFrequency ? (
            <Frequency convFrequency={this.state.convFrequency} />
          ) : null}
          {this.state.convNote ? <Note convNote={this.state.convNote} /> : null}
        </form>
      </div>
    );
  }
}

export default Form;
