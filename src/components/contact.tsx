import React from "react";
import "../styles/contact.css";

//TODO: implement component
//TODO: style the component
export default class Contact extends React.Component {
	render() {
		return (
			<div id="contactSection">
				<ul>
					<li>
						<a href="mailto:mail@wilsonwan.dev">
							<span>Email</span>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.linkedin.com/in/wilsonwandev/">
							<span>Linkedin</span>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://github.com/wilsonwan">
							<span>Github</span>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://twitter.com/WilsonWan_">
							<span>Twitter</span>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
