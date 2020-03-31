import React from "react";
import IssueList from "./components/IssueList.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>GitHub Issues</p>
      </header>
      <Router>
        <Route path="/" exact component={IssueList} />
      </Router>
    </div>
  );
}

export default App;
