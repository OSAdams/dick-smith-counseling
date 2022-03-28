import React from "react";
import "./App.css";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const navLinks = document.querySelectorAll('.nav-link')
    for (let navLinkIndex = 0; navLinkIndex < navLinks.length; navLinkIndex++) {
      const userNavClick = navLinks[navLinkIndex].textContent
      if (event.target.textContent === userNavClick) {
        window.location.hash = '#' + userNavClick
        navLinks[navLinkIndex].className = 'nav-link active'
      } else {
        navLinks[navLinkIndex].className = 'nav-link'
      }
    }
  }

  render() {
    return (
          <header className="row nav-bar flex">
            <div className="col-half nav-title">
              <div className="nav-title">
                <h1>Smith Counseling Centre</h1>
              </div>
            </div>
            <div className="col-half nav-link-list">
              <span className="nav-link"
                onClick={ this.onClick }>Home</span>
              <span className="nav-link"
                onClick={ this.onClick }>Information</span>
              <span className="nav-link"
                onClick={ this.onClick }>Contact</span>
              <span className="nav-link"
                onClick={ this.onClick }>Inquire</span>
            </div>
          </header>
    );
  }
}
