import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { IProjectProps } from "../interfaces/interfaces";

//TODO: implement the component with parameters to be reused
//TODO: style the component
export default class Project extends React.Component<IProjectProps> {
	render() {
		return (
			<div>
				<p>{this.props.Name}</p>
				<p>{this.props.Description}</p>
				<p>{this.props.Image}</p>
				<p>{this.props.Url}</p>
				{this.props.TechStack.map(item => {
					let chip;
					if (!this.isEmptyString(item.Avatar)) {
						chip = (
							<Chip
								color={item.Color}
								className="chip"
								avatar={<Avatar src={item.Avatar}></Avatar>}
								label={item.Name}
							></Chip>
						);
					} else {
						chip = (
							<Chip
								color={item.Color}
								className="chip"
								label={item.Name}
							></Chip>
						);
					}

					return chip;
				})}
			</div>
		);
	}

	isEmptyString(value: string): boolean {
		return value.length > 0;
	}
}
