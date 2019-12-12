import React from "react";
import "../styles/layout.css";

class Layout extends React.Component {
	render() {
		return <main>{this.props.children}</main>;
	}
}

export default Layout;
