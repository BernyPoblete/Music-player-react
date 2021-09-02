import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	return (
		<div className="footer text-center">
			<div className="buttons dark bg-dark">
				<button className="previus">{props.previus}</button>
				<button className="play">{props.play}</button>
				<button className="next">{props.next}</button>
			</div>
		</div>
	);
};
Footer.propTypes = {
	previus: PropTypes.string,
	play: PropTypes.string,
	next: PropTypes.string
};
export default Footer;
