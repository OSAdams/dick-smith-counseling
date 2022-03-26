import "./App.css";

export default function Nav() {
  return (
    <div className="container">
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
    </div>
  );
}
