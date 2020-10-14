import React from 'react'
import propTypes from 'prop-types'

const Header = ({ title }) => {

	const style = {
		textAlign: "center",
		fontSize: "40px"
	}

	return (
		<h1 style={style}>{title}</h1>
	);
};

Header.propTypes = {
	title: propTypes.string
}

export default Header;
