import React, { Component } from "react";
import Issue from "./Issue.jsx";
import { getAPI } from "../utilities/getAPI";

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