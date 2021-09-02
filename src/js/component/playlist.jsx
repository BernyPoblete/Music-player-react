import React from "react";
import PropTypes from "prop-types";

function Playlist(props) {
	let { songsList } = props;
	return (
		<div className="reproductor">
			{songsList.map((song, index) => {
				return (
					<div key={index} onClick={() => props.setSong(song.url)}>
						{`${index + 1} ${song.name}`}
					</div>
				);
			})}
		</div>
	);
}

Playlist.propTypes = {
	songsList: PropTypes.array,
	setSong: PropTypes.func
};
export default Playlist;
