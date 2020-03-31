import React, { Component } from "react";
import Issue from "./Issue.jsx";

class IssueList extends Component {
    state = {
        issues: [],
    }

    async componentDidMount() {
        try {
            let response, issues,
                url = "https://api.github.com/repos/facebook/create-react-app/issues";
            response = await fetch(url);
            issues = await response.json();
            this.setState({
                issues
            })
        } catch(error) {
            console.log("ERROR: ", error)
        }
    }

    render() {
        let renderIssues;
        renderIssues = this.state.issues.map((element, index) => {
            return <Issue key={index} issues={element}/>
        })
        return (
            <div style={{ margin: "10px auto" }}>
                {renderIssues}
            </div>
        )
    }
}

export default IssueList;