import React, { Component } from "react";
import Issue from "./Issue.jsx";

class IssueList extends Component {
    state = {
        issues: []
    }

    async componentDidMount() {
        try {
            let response, data,
                url = "https://api.github.com/repos/facebook/create-react-app/issues";
            response = await fetch(url)
            data = await response.json();
            this.setState({
                issues: await data
            })
        } catch(error) {
            console.log("ERROR: ", error)
        }
    }

    render() {
        let renderIssues;
        renderIssues = this.state.issues.map((element, index) => {
            return <Issue title={element.title} key={index}/>
        })
        return (
            <div>
                {renderIssues}
            </div>
        )
    }
}

export default IssueList;