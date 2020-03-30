import React from "react";
import IssueList from "./components/IssueList.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <main>
        <IssueList />
      </main>
    </div>
  );
}

export default App;
