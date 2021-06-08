import React from 'react';

import {useDispatch} from 'react-redux';

import {AddToWishlist} from '../../../Services/BookStoreServices';

const BookMark=(props)=>{
	const dispatch=useDispatch();
	const addToBookMarks=(e)=>{
			console.log("clicked");
			e.preventDefault();
			dispatch(AddToWishlist(props.value));
			console.log("Clicked and Added");
		}

	return(
		<button className="btn" onClick={addToBookMarks}>
		  <i className="bi bi-bookmark"/>
		</button>
	)


}

export default BookMark;
