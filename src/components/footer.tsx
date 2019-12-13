import React from "react";
import { graphql, StaticQuery } from "gatsby";

//TODO: style the component
export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<StaticQuery
					query={graphql`
						query {
							site {
								siteMetadata {
									footerName
								}
							}
						}
					`}
					render={data => <p>{data.site.siteMetadata.footerName}</p>}
				/>
			</footer>
		);
	}
}
