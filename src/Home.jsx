import React from "react";
import "./index.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.sate = { status: null }
  }

  render() {
    return(
      <>
        <h1>Hello world</h1>
      </>
    )
  }
}
