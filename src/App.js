import React from "react";
import IssueList from "./components/IssueList.jsx";
import IssueDetail from "./components/IssueDetail.jsx/index.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={"/"}>
          <p>GitHub Issues</p>
        </Link>
      </header>
      <Router>
        <Route path="/" exact component={IssueList} />
        <Route path="/issue/:number?" component={IssueDetail} />
      </Router>
    </div>
  );
}

export default App;
