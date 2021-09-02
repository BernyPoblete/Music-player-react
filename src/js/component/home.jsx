import React from "react";
import Navbar from "./navbar.jsx";
import Playlist from "./playlist.jsx";
import Footer from "./footer.jsx";

//create your first component
function Home() {
	return (
		<div className="container">
			<Navbar />
			<Playlist />
			<Footer />
		</div>
	);
}
export default Home;
