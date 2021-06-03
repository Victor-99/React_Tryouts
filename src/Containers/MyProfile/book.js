import React from 'react';

const Book=(props)=>{
	return(
	<div className="card">
	  <div className="card-body">
	    <h5 className="card-title">{props.title}</h5>
	    <p className="card-text">{props.author}</p>
	    <p className="card-text">{props.publisher}</p>
	  </div>
	</div>
	)
}

export default Book;
