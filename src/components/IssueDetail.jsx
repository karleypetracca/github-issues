import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import { getAPI } from "../utilities/getAPI";
import "./Issue.css";

class IssueDetail extends Component {
	constructor() {
		super();
		this.state = {
      detail: {},
      githubUrl: "",
      title: "",
      date: "",
      body: "",
      user: "",
      userUrl: "",
      issueNumber: "",
    };
	}

	async componentDidMount() {
		try {
			const { number } = this.props.match.params;
			const url = `https://api.github.com/repos/facebook/create-react-app/issues/${number}`;
			const detail = await getAPI(url);
			this.setState({
        detail: detail,
        githubUrl: detail.html_url,
        title: detail.title,
        date: detail.created_at.toString().slice(0, 10),
        body: detail.body,
        user: detail.user.login,
        userUrl: detail.user.html_url,
        issueNumber: detail.number
      });

		} catch(error) {
			console.log("ERROR: ", error)
		}
	}
	
	render() {
		return (
      <div className="issueContainer">
        <a href={this.state.githubUrl}>
          <h2>{this.state.title} #{this.state.issueNumber}</h2>
        </a>
        <div>
          <Markdown className="markdownBody">
						{this.state.body}
					</Markdown>
        </div>
        <p className="footer">
					#{this.state.issueNumber} opened {this.state.date} by{" "}
					<a href={this.state.userUrl}>
					{this.state.user}</a>
				</p>
      </div>
    );
	}
}

export default IssueDetail;