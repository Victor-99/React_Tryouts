import {BOOKS_READ,CHANGE_PAGE,ADD_TO_WISHLIST,RESET_BOOKS_READ} from '../actions/types';

export const Change_page=(newPage)=>{
	return (dispatch)=>{
		dispatch({
			type:CHANGE_PAGE,
			payload:newPage
		})
	}
}

export const Get_book=(id)=>{

}

export const ReadBook=(id)=>{
	return(dispatch)=>{
		dispatch({
			type:BOOKS_READ,
			payload:id
		})
	}
}

export const ResetBooksRead=()=>{
	return(dispatch)=>{
		dispatch({type:RESET_BOOKS_READ});
	}
}

export const AddToWishlist=(isbn)=>{
	console.log("Dispatching")
	return(dispatch)=>{
		dispatch({
			type:ADD_TO_WISHLIST,
			payload:isbn
		})
	}

}
