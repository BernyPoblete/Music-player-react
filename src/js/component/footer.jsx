import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	return (
		<div className="footer text-center">
			<div className="buttons dark bg-dark">
				{props.isPlaying ? (
					<button className="play" onClick={props.palancaPausePlay}>
						PAUSE
					</button>
				) : (
					<button className="pause" onClick={props.palancaPausePlay}>
						PLAY
					</button>
				)}
			</div>
		</div>
	);
};
Footer.propTypes = {
	isPlaying: PropTypes.bool,
	palancaPausePlay: PropTypes.func
};
export default Footer;
