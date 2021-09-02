import React, { useRef, useState } from "react";
import Navbar from "./navbar.jsx";
import Playlist from "./playlist.jsx";
import Footer from "./footer.jsx";

//create your first component
function Home() {
	let audioPlayer = useRef(null);
	let [isPlaying, setIsPlaying] = useState(false);
	const baseUrl = "https://assets.breatheco.de/apis/sound/";
	const songs = [
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		}
	];

	const setSong = url => {
		audioPlayer.current.src = baseUrl + url;
		audioPlayer.current.play();
		setIsPlaying(true);
	};

	const palancaPausePlay = e => {
		if (isPlaying) {
			setIsPlaying(!isPlaying);
			audioPlayer.current.pause();
		} else {
			audioPlayer.current.play();
		}
	};

	return (
		<div className="container">
			<Navbar />
			<Playlist songsList={songs} setSong={setSong} />
			<Footer isPlaying={isPlaying} palancaPausePlay={palancaPausePlay} />
			<audio ref={audioPlayer} />
		</div>
	);
}
export default Home;
