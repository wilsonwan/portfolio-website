import React from "react";
import Project from "../components/project";

//TODO: style the component
export default class ProjectList extends React.Component {
	render() {
		return (
			<div>
				<p>Projects</p>
				<Project name="Project 1" description="Description 1" />
				<Project name="Project 2" description="Description 2" />
				<Project name="Project 2" description="Description 3" />
			</div>
		);
	}
}
