import React from 'react';

const Card = (props) => {
	
	const address = `https://robohash.org/${props.id}?200x200`;

	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow">
			<img src={address} alt="robots"/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card