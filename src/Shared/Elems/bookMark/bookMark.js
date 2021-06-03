import React from 'react';
import {AddToWishlist} from '../../../Services/BookStoreServices';


const BookMark=({inWishList})=>{

	const addToBookMarks=(e)=>{
		e.preventDefault();
		const val=!inWishList;
		AddToWishlist(val);
		console.log("BookmarkAdded");
	}
	return(
		<button className="btn" onClick={addToBookMarks}>
		  <i className="bi bi-bookmark"/>
		</button>
	)


}

export default BookMark;
