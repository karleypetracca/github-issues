import React from "react";
import IssueList from "./components/IssueList.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          GitHub Issue List
        </p>
      </header>
      <main>
        <IssueList />
      </main>
    </div>
  );
}

export default App;
