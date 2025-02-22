import React from "react";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container mb-5">
				<Jumbotron />
				<div className="row justify-content-center g-4">
					<div className="col-12 sm-6 col-md-4 col-lg-3"><Card /></div>
					<div className="col-12 sm-6 col-md-4 col-lg-3"><Card /></div>
					<div className="col-12 sm-6 col-md-4 col-lg-3"><Card /></div>
					<div className="col-12 sm-6 col-md-4 col-lg-3"><Card /></div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;