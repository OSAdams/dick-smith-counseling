import React from 'react'
import "./index.css";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import parseRoute from './lib/parse-route.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    }
  }

  // componentDidMount() {
  //   window.addEventListener('hashchange', () => {
  //     const route = parseRoute(window.location.hash);
  //     this.setState({ route })
  //   })
  // }

  // renderPage() {
  //   const { route } = this.state;
  //   if (route.path === '') {
  //     return <Home />
  //   }
  // }

  render() {
    return (
      <div className="container">
        <Nav />
        <Home />
      </div>
    )
  }
}
