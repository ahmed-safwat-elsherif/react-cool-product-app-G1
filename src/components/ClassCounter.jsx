import React, { Component } from "react";

export default class ClassCounter extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    console.log("click");
    this.setState({ count: this.state.count + 1 });
  };
  //   componentDidMount() {
  //     console.log("Class Counter is mounted");
  //     document.title = `${this.state.count} clicks`;
  //   }
  //   componentDidUpdate() {
  //     document.title = `${this.state.count} clicks`;
  //   }
  componentWillUnmount() {
    console.log("Class Counter is destroyed 💔 ");
  }
  render() {
    return (
      <div>
        <h3>
          Class Component{" "}
          <span className="badge bg-primary">count: {this.state.count}</span>
        </h3>

        <button className="btn btn-primary" onClick={this.handleIncrement}>
          [+]
        </button>
      </div>
    );
  }
}
