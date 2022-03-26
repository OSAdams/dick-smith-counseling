import React from "react";
import "./index.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: null }
  }

  render() {
    return(
          <section className="row home">
            <div className="col-full">
              <h1>Hello world</h1>
            </div>
          </section>
    )
  }
}
