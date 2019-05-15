import React from "react";
import PropTypes from "prop-types";
import "./layout.css";

class Layout extends React.Component {
	render() {
		return <main>{this.props.children}</main>;
	}
}

Layout.propTypes = {
	children: PropTypes.func.isRequired,
};

export default Layout;
