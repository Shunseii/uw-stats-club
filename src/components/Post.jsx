import React from 'react'
import propTypes from 'prop-types'
import postStyle from './postStyle.module.css'

const Post = (props) => {
	return (
		<div className={postStyle.container}>
			<h2 className={postStyle.h2}>{props.title}</h2>
			{props.children}
		</div>
	);
};

Post.propTypes = {
	children: propTypes.element,
	title: propTypes.string
};

export default Post;
