import React from 'react';
import {useDispatch} from 'react-redux';

import {ReadBook} from '../../Services/BookStoreServices';

const ViewBook=(props)=>{
	const dispatch=useDispatch();
	const onClickReadBook=(e)=>{
		e.preventDefault();
		dispatch(ReadBook(props.location.data.isbn));
		console.log("Book added");

	}


	return(
	<div className="text-center">
	  <img className="img-thumbnail" src={props.location.data.imgUrl} alt="..." />
	  <div className="card-body">
	    <h5 className="card-title">{props.location.data.title}</h5>
	    <button className="btn btn-primary" onClick={onClickReadBook}>Read Book</button>
	    <p className="card-text">
	      <small className="text-muted">By: {props.location.data.author}</small>
		 <br/>
		 <br/>
		 </p>
	    <p className="card-text">
	    A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.
	    The technical term for this physical arrangement is codex (plural, codices).
	    In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll.
	    A single sheet in a codex is a leaf and each side of a leaf is a page.

As an intellectual object, a book is prototypically a composition of such great length that it takes a considerable investment of time to compose and still considered as an investment of time to read.
In a restricted sense, a book is a self-sufficient section or part of a longer composition, a usage that reflects the fact that, in antiquity, long works had to be written on several scrolls and each scroll had to be identified by the book it contained.
Each part of Aristotle's Physics is called a book. In an unrestricted sense, a book is the compositional whole of which such sections, whether called books or chapters or parts, are parts.

The intellectual content in a physical book need not be a composition, nor even be called a book. Books can consist only of drawings, engravings or photographs, crossword puzzles or cut-out dolls.
In a physical book, the pages can be left blank or can feature an abstract set of lines to support entries, such as in an account book, an appointment book, an autograph book, a notebook, a diary or a sketchbook. Some physical books are made with pages thick and sturdy enough to support other physical objects, like a scrapbook or photograph album. Books may be distributed in electronic form as ebooks and other formats.
	    </p>
	  </div>
	</div>
	);
}

export default ViewBook;
