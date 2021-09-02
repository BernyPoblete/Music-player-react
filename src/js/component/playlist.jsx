import React from "react";
import PropTypes from "prop-types";

function Playlist() {
	return (
		<div className="reproductor">
			<div className="one">1</div>
			<div className="two">2</div>
			<div className="three">3</div>
			<div className="four">4</div>
			<div className="five">5</div>
			<div className="six">6</div>
			<div className="seven">7</div>
			<div className="eight">8</div>
			<div className="nine">9</div>
			<div className="ten">10</div>
		</div>
	);
}

Playlist.propTypes = {
	1: PropTypes.string,
	2: PropTypes.string,
	3: PropTypes.string,
	4: PropTypes.string,
	5: PropTypes.string,
	6: PropTypes.string,
	7: PropTypes.string,
	8: PropTypes.string,
	9: PropTypes.string,
	10: PropTypes.string
};
export default Playlist;
