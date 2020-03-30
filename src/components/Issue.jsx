import React from "react";
import ReactMarkdown from "react-markdown";
import "./Issue.css";

function Issue(props) {
    let { title, link, body, user, openDate, issueId } = props;
	let formattedDate = openDate.toString().slice(0,10);
	
	// let display = { display: "block" },
    // 	bodyShowing = false;

    // function onHover() {
	// 	bodyShowing = !bodyShowing;
	// 	if (!!bodyShowing) {
	// 		display = { display: "block" };
	// 	} else {
	// 		display = { display: "none" };
	// 	}
	// 	display = !!bodyShowing ? { display: "block" } : { display: "none"}; 
	// 	console.log(display)
    // }

    return (
		<div
			className="issueContainer"
		>
			<a href={link}>
				<h2>{title}</h2>
			</a>
			<div>
				<ReactMarkdown className="markdownBody" source={body} />
			</div>
			<p className="footer">
				#{issueId} opened {formattedDate} by {user}
			</p>
		</div>
    );
}

export default Issue;