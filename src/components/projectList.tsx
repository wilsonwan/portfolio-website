import React from "react";
import Project from "../components/project";

//TODO: style the component
export default class ProjectList extends React.Component {
	render() {
		return (
			<div>
				<p>Projects</p>
				<Project
					name="Project 1"
					description="Description 1"
					image="Image 1"
					url="Url 1"
					techStack={["React", "TypeScript"]}
				/>
			</div>
		);
	}
}
