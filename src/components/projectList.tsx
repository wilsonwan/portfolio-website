import React from "react";
import Project from "../components/project";

//TODO: style the component
export default class ProjectList extends React.Component {
	render() {
		return (
			<div>
				<p>Projects</p>
				<Project />
				<Project />
				<Project />
			</div>
		);
	}
}
