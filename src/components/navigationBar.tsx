import React from "react";
import Grid from "@material-ui/core/Grid";
import "../styles/navigationBar.css";
import Typography from "@material-ui/core/Typography";

//TODO: link the anchor links
//TODO: style the component
export default class NavigationBar extends React.Component {
	render() {
		return (
			<div id="navigationBar" className="navigationRoot">
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					spacing={3}
				>
					<Grid item xs={3}>
						<a href="#">
							<Typography>About</Typography>
						</a>
					</Grid>
					<Grid item xs={3}>
						<a href="https://drive.google.com/open?id=183Iiex5fs1tH12xxkYF6BiE7iHO9-V2n">
							<Typography>Resume</Typography>
						</a>
					</Grid>
					<Grid item xs={3}>
						<a href="#">
							<Typography>Projects</Typography>
						</a>
					</Grid>
					<Grid item xs={3}>
						<a href="https://github.com/wilsonwan">
							<Typography>Github</Typography>
						</a>
					</Grid>
				</Grid>
			</div>
		);
	}
}
