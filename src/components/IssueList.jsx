import React, { useState, useEffect } from "react";
import { getAPI } from "../utilities/getAPI";
import { Link } from "react-router-dom";
import "./Issue.css";

function IssueList() {
	const [issues, setIssues] = useState([]);

	const getIssues = async () => {
		try {
			const url =
				"https://api.github.com/repos/facebook/create-react-app/issues";
			const issues = await getAPI(url);
			setIssues(issues);
		} catch (error) {
			console.log("ERROR: ", error);
		}
	};

	useEffect(() => {
		getIssues();
	});

	const renderIssues = issues.map(issue => {
		const formattedDate = issue.created_at.toString().slice(0, 10);
		return (
			<div className="issueContainer">
				<a href={`/issue/${issue.number}`}>
					<h2>{issue.title}</h2>
				</a>
				<p className="footer">
					#{issue.number} opened {formattedDate} by{" "}
					<a href={issue.user.html_url}>{issue.user.login}</a>
				</p>
				<Link to={`/issue/${issue.number}`}>
					Click here to view issue details...
				</Link>
			</div>
		);
	});

	return <div className="issueListContainer">{renderIssues}</div>;
}

export default IssueList;
