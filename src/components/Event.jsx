import React from 'react'
import propTypes from 'prop-types'
import eventStyle from './eventStyle.module.css'

const Event = (props) => {
	return (
		<div className={eventStyle.container}>
			<h2 className={eventStyle.h2}>{props.title}</h2>
			<ul>
				<li>{props.date}</li>
				<li>{props.time}</li>
			</ul>
			{props.children}
		</div>
	);
};

Event.propTypes = {
	children: propTypes.element,
	title: propTypes.string,
	date: propTypes.string,
	time: propTypes.string
};

export default Event;
