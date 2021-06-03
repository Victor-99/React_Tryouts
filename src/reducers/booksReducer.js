import {BOOKS_READ,CHANGE_PAGE,ADD_TO_WISHLIST,RESET_BOOKS_READ} from '../actions/types';

let bookStore={
	booksList:[
		  {
		    isbn: "1",
		    title: "Eloquent JavaScript, Second Edition",
		    imgUrl:
		      "https://www.oreilly.com/library/view/eloquent-javascript-2nd/9781457189821/orm_front_cover.jpg",
		    author: "Marijn Haverbeke",
		    publisher: "No Starch Press",
		    inWishlist:false
		  },
		  {
		    isbn: "2",
		    title: "Learning JavaScript Design Patterns",
		    imgUrl: "https://covers.oreillystatic.com/images/0636920025832/lrg.jpg",
		    author: "Addy Osmani",
		    publisher: "O'Reilly Media",
		    inWishlist:false
		  },

		  {
		    isbn: "3",
		    title: "Speaking JavaScript",
		    imgUrl: "https://covers.oreillystatic.com/images/0636920029564/lrg.jpg",
		    author: "Axel Rauschmayer",
		    publisher: "O'Reilly Media",
		    inWishlist:false
		  },
		  {
		    isbn: "4",
		    title: "Programming JavaScript Applications",
		    imgUrl:
		      "https://i.pinimg.com/originals/59/41/d5/5941d59509957a44820942217c2abc50.jpg",
		    author: "Eric Elliott",
		    publisher: "O'Reilly Media",
		    inWishlist:false
		  },
		  {
		    isbn: "5",
		    title: "Understanding ECMAScript 6",
		    imgUrl: "https://covers.oreillystatic.com/images/9781593277574/lrg.jpg",
		    author: "Nicholas C. Zakas",
		    publisher: "No Starch Press",
		    inWishlist:false
		  },
		  {
		    isbn: "6",
		    title: "You Don't Know JS",
		    imgUrl: "https://covers.oreillystatic.com/images/0636920033738/lrg.jpg",
		    author: "Kyle Simpson",
		    publisher: "O'Reilly Media",
		    inWishlist:false
		  },
		  {
		    isbn: "7",
		    title: "Git Pocket Guide",
		    imgUrl: "https://covers.oreillystatic.com/images/0636920024972/lrg.jpg",
		    author: "Richard E. Silverman",
		    publisher: "O'Reilly Media",
		    inWishlist:false
		  },
		  {
		    isbn: "8",
		    title: "Designing Evolvable Web APIs with ASP.NET",
		    imgUrl: "https://covers.oreillystatic.com/images/0636920026617/lrg.jpg",
		    author: "Glenn Block, et al.",
		    publisher: "O'Reilly Media",
		    inWishlist:false
		  },
		  {
		    title: "Unlocking Android",
		    isbn: "9",
		    imgUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
		    publisher: "PUBLISH",
		    author: "W. Frank Ableson, Charlie Collins, Robi Sen",
		    inWishlist:false
		  },
		  {
		    title: "Android in Action, Second Edition",
		    isbn: "10",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
		    publisher: "PUBLISH",
		    author: "W. Frank Ableson, Robi Sen",
		    inWishlist:false
		  },
		  {
		    title: "Specification by Example",
		    isbn: "11",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
		    publisher: "PUBLISH",
		    author: "Gojko Adzic",
		    inWishlist:false
		  },
		  {
		    title: "Flex 3 in Action",
		    isbn: "12",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
		    publisher: "PUBLISH",
		    author: "Tariq Ahmed with Jon Hirschi, Faisal Abid",
		    inWishlist:false
		  },
		  {
		    title: "Flex 4 in Action",
		    isbn: "13",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
		    publisher: "PUBLISH",
		    author: "Tariq Ahmed, Dan Orlando, John C. Bland II, Joel Hooks",
		    inWishlist:false
		  },
		  {
		    title: "Collective Intelligence in Action",
		    isbn: "14",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
		    publisher: "PUBLISH",
		    author: "Satnam Alag",
		    inWishlist:false
		  },
		  {
		    title: "Zend Framework in Action",
		    isbn: "15",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
		    publisher: "PUBLISH",
		    author: "Rob Allen, Nick Lo, Steven Brown",
		    inWishlist:false
		  },
		  {
		    title: "Flex on Java",
		    isbn: "16",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
		    publisher: "PUBLISH",
		    author: "Bernerd Allmon, Jeremy Anderson",
		    inWishlist:false
		  },
		  {
		    title: "Griffon in Action",
		    isbn: "17",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
		    publisher: "PUBLISH",
		    author: "Andres Almiray, Danno Ferrin, , James Shingler",
		    inWishlist:false
		  },
		  {
		    title: "OSGi in Depth",
		    isbn: "18",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
		    publisher: "PUBLISH",
		    author: "Alexandre de Castro Alves",
		    inWishlist:false
		  },
		  {
		    title: "Flexible Rails",
		    isbn: "19",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
		    publisher: "PUBLISH",
		    author: "Peter Armstrong",
		    inWishlist:false
		  },
		  {
		    title: "Hello! Flex 4",
		    isbn: "20",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg",
		    publisher: "PUBLISH",
		    author: "Peter Armstrong",
		    inWishlist:false
		  },
		  {
		    title: "Coffeehouse",
		    isbn: "21",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg",
		    publisher: "PUBLISH",
		    author: "Levi Asher, Christian Crumlish",
		    inWishlist:false
		  },
		  {
		    title: "Team Foundation Server 2008 in Action",
		    isbn: "22",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/azher.jpg",
		    publisher: "PUBLISH",
		    author: "Jamil Azher",
		    inWishlist:false
		  },
		  {
		    title: "Brownfield Application Development in .NET",
		    isbn: "23",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
		    publisher: "PUBLISH",
		    author: "Kyle Baley, Donald Belcham",
		    inWishlist:false
		  },
		  {
		    title: "MongoDB in Action",
		    isbn: "24",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg",
		    publisher: "PUBLISH",
		    author: "Kyle Banker",
		    inWishlist:false
		  },
		  {
		    title: "PowerBuilder 9: Internet and Distributed Application Development",
		    imgUrl: "https://www.informit.com/ShowCover.aspx?isbn=0768663296",
		    isbn: "25",
		    publisher: "PUBLISH",
		    author: "William Green, John D. Olson",
		    inWishlist:false
		  },
		  {
		    title: "Jaguar Development with PowerBuilder 7",
		    isbn: "26",
		    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51JD1A263SL.jpg",
		    publisher: "PUBLISH",
		    author: "Michael Barlotta",
		    inWishlist:false
		  },
		  {
		    title: "Taming Jaguar",
		    isbn: "27",
		    imgUrl:
		      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg",
		    publisher: "PUBLISH",
		    author: "Michael J. Barlotta, Jason R. Weiss",
		    inWishlist:false
		  },
	  ],
	  curPage:1,
	  booksRead:[],

}



const booksReducer=(state=bookStore,action)=>{
	switch (action.type){

		case CHANGE_PAGE:
		//state.curPage=action.payload;
		state={...state,curPage:action.payload};
		return state;

		case BOOKS_READ:
		const idx=Number(action.payload);
		if(state.booksRead.indexOf(idx)===-1){
			state={...state,booksRead:[...state.booksRead,idx]};
		}
		return state;

		case ADD_TO_WISHLIST:
		const indx=Number(action.payload);
		state.booksList[indx].inWishlist?(
			state={...state,state.booksList[indx].inWishlist:true,
				booksRead:[...state.booksRead,Number(indx)]}
		):(
			state={...state,state.booksList[indx].inWishlist:false,
				booksRead:[...state.booksRead.filter(function (value,arr,indx){
				return Number(index!=indx);
			}))]}
		);
		return state;

		case RESET_BOOKS_READ:
		state={...state,booksRead:[]}
		return state

		default:
		console.log("default");
		return state;
	}
}



export default booksReducer;
