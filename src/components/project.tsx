import React from "react";
import Chip from "@material-ui/core/Chip";

interface IProjectProps {
	name: string;
	description: string;
	image: string;
	url: string;
	techStack: string[];
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
				<p>{this.props.image}</p>
				<p>{this.props.url}</p>
				{this.props.techStack.map(item => {
					return (
						<Chip
							color="primary"
							className="chip"
							label={item}
						></Chip>
					);
				})}
			</div>
		);
	}
}
