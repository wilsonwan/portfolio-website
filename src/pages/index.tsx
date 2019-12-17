import React from "react";
import "../styles/index.css";

import Layout from "../components/layout";
import NavigationBar from "../components/navigationBar";
import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";
import ProjectList from "../components/projectList";
import Contact from "../components/contact";
import Footer from "../components/footer";
import CssBaseline from "@material-ui/core/CssBaseline";

//TODO: style the component
class Index extends React.Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Layout>
					<NavigationBar />
					<AboutMe />
					<Skills />
					<ProjectList />
					<Contact />
					<Footer />
				</Layout>
			</React.Fragment>
		);
	}
}

export default Index;
