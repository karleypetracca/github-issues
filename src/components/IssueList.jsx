import React, { Component } from "react";
import { getAPI } from "../utilities/getAPI";
import { Link } from "react-router-dom";
import "./Issue.css";

class IssueList extends Component {
	state = {
		issues: [],
	}

	async componentDidMount() {
		try {
			const url = "https://api.github.com/repos/facebook/create-react-app/issues";
			const issues = await getAPI(url);
			this.setState({
				issues
			})
		} catch(error) {
			console.log("ERROR: ", error)
		}
	}

	render() {
		const renderIssues = this.state.issues.map(element => {
			const formattedDate = element.created_at.toString().slice(0, 10);
			return (
        <div className="issueContainer">
          <a href={`/issue/${element.number}`}>
            <h2>{element.title}</h2>
          </a>
          <p className="footer">
            #{element.number} opened {formattedDate} by{" "}
            <a href={element.user.html_url}>{element.user.login}</a>
          </p>
          <Link to={`/issue/${element.number}`}>
						Click here to view issue details...
					</Link>
        </div>
      );
		})
		return (
			<div className="issueListContainer">
				{renderIssues}
			</div>
		)
	}
}

export default IssueList;