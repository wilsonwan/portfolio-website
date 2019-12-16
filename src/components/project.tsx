import React from "react";

interface IProjectProps {
	name: string;
	description: string;
}

//TODO: implement the component with parameters to be reused
//TODO: style the component
export default class Project extends React.Component<IProjectProps> {
	render() {
		return (
			<div>
				<p>Project here...</p>
				<p>{this.props.name}</p>
				<p>{this.props.description}</p>
			</div>
		);
	}
}
