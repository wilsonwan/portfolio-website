import React from "react";

//TODO: Refactor list items to reusable component
//TODO: Use siteMetadata with GraphQL
export default class Skills extends React.Component {
	render() {
		return (
			<div id="skills">
				<p>Languages</p>
				<ul>
					<li>
						<span>HTML</span>
					</li>
					<li>
						<span>CSS</span>
					</li>
					<li>
						<span>C#</span>
					</li>
					<li>
						<span>JavaScript</span>
					</li>
					<li>
						<span>TypeScript</span>
					</li>
					<li>
						<span>Python</span>
					</li>
					<li>
						<span>Go</span>
					</li>
					<li>
						<span>SQL</span>
					</li>
				</ul>
				<p>Libraries and Frameworks</p>
				<ul>
					<li>
						<span>.NET & .NET Core</span>
					</li>
					<li>
						<span>ASP.NET Webforms & MVC</span>
					</li>
					<li>
						<span>Windows Forms</span>
					</li>
					<li>
						<span>jQuery</span>
					</li>
					<li>
						<span>Node</span>
					</li>
					<li>
						<span>Webpack</span>
					</li>
					<li>
						<span>React</span>
					</li>
				</ul>
				<p>Tools</p>
				<ul>
					<li>
						<span>MSSQL</span>
					</li>
					<li>
						<span>MySQL</span>
					</li>
					<li>
						<span>Amazon Web Services</span>
					</li>
					<li>
						<span>Microsoft Azure</span>
					</li>
					<li>
						<span>Active Directory</span>
					</li>
					<li>
						<span>IIS</span>
					</li>
					<li>
						<span>Visual Studio</span>
					</li>
					<li>
						<span>Visual Studio Code</span>
					</li>
					<li>
						<span>Git</span>
					</li>
					<li>
						<span>SVN</span>
					</li>
					<li>
						<span>Jira</span>
					</li>
					<li>
						<span>TeamCity</span>
					</li>
				</ul>
			</div>
		);
	}
}
