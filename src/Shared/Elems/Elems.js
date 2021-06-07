import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import BookMark from './bookMark/bookMark';
import {AddToWishlist} from '../../Services/BookStoreServices';

import "./Elems.css";

const Elems=(props)=>{
	const dispatch=useDispatch();
	const addToBookMarks=(e)=>{
		e.preventDefault();
		dispatch(AddToWishlist(e.target.value));
		console.log("BookmarkAdded");
	}
	let bookAv=null;
	if(props.data && props.data.length>0){
		bookAv=props.data.map((bookAv,index)=>{
			return(
				<div className="col-md-4 my-4" key={index}>

				    <img className="card-img-top ms-2 img-thumbnail" src={bookAv.imgUrl} alt="..." />
				  	<div className="card-body">
				    <small className="text-muted">24 May 2021</small>
				    <h5 className="card-title my-2">
					 {bookAv.title}
				    </h5>
				    <span>
				    <Link to={{pathname:'/Viewbook',
		    				   data:bookAv}}>
				    <button className="btn btn-primary my-2">
					 Read more
				    </button>
				    </Link>
				    <BookMark onClick={addToBookMarks} value={bookAv.isbn}/>
				    </span>
				  </div>
				</div>
		   );
	   })
	}

		return(
			<section className="py-5">
			  <div className="container">
			    <h2 className="mb-5 text-center">{props.sectionTitle}</h2>
			    <div className="row">
			    {(props.data && props.data.length>0)
			    ?(bookAv):<div>books Not Available</div>}
			    </div>
			  </div>
			</section>
		);

}

export default Elems;
