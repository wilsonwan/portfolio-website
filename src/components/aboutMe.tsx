import React from "react";
import { graphql, StaticQuery } from "gatsby";

//TODO: style the component
export default class AboutMe extends React.Component {
	render() {
		return (
			<StaticQuery
				query={graphql`
					query {
						site {
							siteMetadata {
								personalSummary
							}
						}
					}
				`}
				render={data => <p>{data.site.siteMetadata.personalSummary}</p>}
			/>
		);
	}
}
