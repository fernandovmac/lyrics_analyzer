// import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>My Token = {window.token}</p>
//         <p>is this working</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputArtist: "",
      inputSong: "",
      lyrics: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateInputArtist = this.updateInputArtist.bind(this);
    this.updateInputSong = this.updateInputSong.bind(this);
  }

  handleClick() {
    axios
      .get(
        "http://0.0.0.0:5000/getquery?artist=" +
          this.state.inputArtist +
          "&song_title=" +
          this.state.inputSong
      )
      .then(response => this.setState({ lyrics: response.data.artist }));
    console.log(React.version);
    // .then(response => console.log(response));
    // console.log("success!", response);
  }

  updateInputArtist(event) {
    this.setState({ inputArtist: event.target.value });
  }

  updateInputSong(event) {
    this.setState({ inputSong: event.target.value });
  }

  state = {};
  render() {
    return (
      <div className="button_container">
        <p>My Token = {window.token}</p>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="artist name here"
            aria-label="artist name here"
            aria-describedby="inputGroup-sizing-lg"
            value={this.state.inputArtist}
            onChange={this.updateInputArtist}
          />
          <input
            type="text"
            className="form-control"
            placeholder="song title here"
            aria-label="song title here"
            aria-describedby="inputGroup-sizing-lg"
            value={this.state.inputSong}
            onChange={this.updateInputSong}
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-primary btn-m"
              // className="buttonMaster"
              onClick={this.handleClick}
            >
              call results!
            </button>
          </div>
        </div>
        <h2>
          Artist: <span class="badge badge-dark">{this.state.inputArtist}</span>
        </h2>
        <h2>
          Song: <span class="badge badge-dark">{this.state.inputSong}</span>
        </h2>
        <p className="response">{this.state.lyrics}</p>
      </div>
    );
  }
}

export default App;
