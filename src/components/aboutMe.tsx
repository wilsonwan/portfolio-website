import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

//TODO: style the component
export default class AboutMe extends React.Component {
	render() {
		return (
			<div>
				<Grid container justify="center" alignItems="center">
					<Grid item>
						<Typography>Hello! I'm Wilson Wan</Typography>
					</Grid>
					<StaticQuery
						query={graphql`
							query {
								site {
									siteMetadata {
										currentJobTitle
										personalSummary
									}
								}
							}
						`}
						render={data => (
							<Grid item>
								<Paper>
									<Typography>
										{data.site.siteMetadata.currentJobTitle}
									</Typography>
									<Typography>
										{data.site.siteMetadata.personalSummary}
									</Typography>
								</Paper>
							</Grid>
						)}
					/>
				</Grid>
			</div>
		);
	}
}
