import React from "react";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/contact.css";

//TODO: implement component
//TODO: style the component
export default class Contact extends React.Component {
	render() {
		return (
			<div id="contactSection">
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					spacing={1}
				>
					<Grid item xs={2}>
						<Icon>
							<MailIcon />
						</Icon>
						<a href="mailto:mail@wilsonwan.dev">
							<Typography variant="caption">
								mail@wilsonwan.dev
							</Typography>
						</a>
					</Grid>
					<Grid item xs={2}>
						<Icon>
							<LinkedInIcon />
						</Icon>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/wilsonwandev/"
						>
							<Typography variant="caption">
								Wilson Wan
							</Typography>
						</a>
					</Grid>
					<Grid item xs={2}>
						<Icon>
							<GitHubIcon />
						</Icon>
						<a target="_blank" href="https://github.com/wilsonwan">
							<Typography variant="caption">
								Wilson Wan
							</Typography>
						</a>
					</Grid>
					<Grid item xs={2}>
						<Icon>
							<TwitterIcon />
						</Icon>
						<a
							target="_blank"
							href="https://twitter.com/WilsonWan_"
						>
							<Typography variant="caption">
								@WilsonWan_
							</Typography>
						</a>
					</Grid>
				</Grid>
			</div>
		);
	}
}
