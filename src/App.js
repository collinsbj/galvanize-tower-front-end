import React, { Component } from "react";
import "./App.css";
// import Laptops from "./Laptops";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laptops: [],
      phones: []
    };
  }

  componentDidMount() {
    var laptops = [];
    var phones = [];
    fetch("https://www.galvanize-tower-front-end.herokuapp.com/laptops")
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
    // fetch("https://www.galvanize-tower-back-end.herokuapp.com/phones")
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
