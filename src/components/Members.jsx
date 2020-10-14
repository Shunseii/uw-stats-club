import React from 'react'
import memberStyle from './memberStyle.module.css'
import Member from './Member.jsx'
//import propTypes from 'prop-types'

const Members = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<div className={memberStyle.imgContainer}>
				<Member name="John Doe" position="President" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
			</div>

			<br />

			<div className={memberStyle.imgContainer}>
				<Member name="Jane Done" position="Technology" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
			</div>

			<br />

			<div className={memberStyle.imgContainer}>
				<Member name="Jane Done" position="Sth" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
			</div>
			<div className={memberStyle.imgContainer}>
				<Member name="John Doe" position="Sth Else" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
			</div>
			<div className={memberStyle.imgContainer}>
				<Member name="John Doe" position="Other position" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
			</div>

		</div>
	);
};

export default Members;
