import React from "react";
import Project from "../components/project";
import blue from "@material-ui/core/colors/blue";

//TODO: style the component
export default class ProjectList extends React.Component {
	render() {
		return (
			<div>
				<p>Projects</p>
				<Project
					Name="Combo!"
					Description="A rapid prototype game made during a 48 hours online hackathon (GM48). Achieved 4th place ranking overall."
					Image="https://files.gm48.net/games/419/419_1484523768_banner_Untitled.png"
					Url="https://gm48.net/game/419/combo"
					TechStack={[
						{
							Key: 1,
							Avatar: "",
							Name: "GML",
							Color: "primary",
						},
					]}
				/>
			</div>
		);
	}
}
