import React from "react";
import "./App.css";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navigation: null }
  }
  render() {
    return (
          <header className="row nav-bar flex">
            <div className="col-half nav-title">
              <h1>Smith Counseling Centre</h1>
            </div>
            <div className="col-half nav-links">
              <a className= "nav-link" href="google.com">Home</a>
              <a className= "nav-link" href="google.com">Information</a>
              <a className= "nav-link" href="google.com">Contact</a>
              <a className= "nav-link" href="google.com">Inquire</a>
            </div>
          </header>
    );
  }
}
