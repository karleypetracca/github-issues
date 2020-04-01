import React from "react";
import IssueList from "./components/IssueList.jsx";
import IssueDetail from "./components/IssueDetail.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<a href="/">
					<p>GitHub Issues</p>
				</a>
			</header>
			<Router>
				<Route path="/" exact component={IssueList} />
				<Route path="/issue/:number?" component={IssueDetail} />
			</Router>
		</div>
	);
}

export default App;
