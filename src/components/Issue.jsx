import React from "react";
import Markdown from "markdown-to-jsx";
import "./Issue.css";

function Issue(props) {
  let { issues } = props,
    formattedDate = issues.created_at.toString().slice(0,10);

    return (
      <div className="issueContainer">
        <a href={issues.url}>
          <h2>{issues.title}</h2>
        </a>
        <div>
          <Markdown className="markdownBody">
            {issues.body}
          </Markdown>
        </div>
        <p className="footer">
          #{issues.number} opened {formattedDate} by
          <a href={issues.user.html_url}>{issues.user.login}</a>
        </p>
      </div>
    );
}

export default Issue;