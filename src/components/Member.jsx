import React from 'react'
import propTypes from 'prop-types'

const Member = ({ name, position, src }) => {
	return (
		<div>
			<h3>{name}</h3>
			<img src={src}></img>
			<h4>{position}</h4>
		</div>
	);
}

Member.propTypes = {
	name: propTypes.string,
	position: propTypes.string,
	src: propTypes.string
}

export default Member;
