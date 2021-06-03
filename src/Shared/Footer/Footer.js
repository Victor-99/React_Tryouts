import React from 'react';


const Footer=(props)=>{
	return(
		<footer className="text-center">
		<h5>Bookstore</h5>
		<p className='copyright'>Copyright Tata Elxsi | {props.year}</p>
		</footer>
	);
}

export default Footer;
