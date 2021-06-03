import React,{Component} from 'react';
import Book from './book';

import {connect} from 'react-redux';

class MyProfile extends Component{
	render(){
		console.log(this.props);
		let bookNum=null;
		if(this.props.booksRead && this.props.booksRead.length>0){
			bookNum=this.props.booksRead.map((bookNum,index)=>{
				return(
					<div className="col-md-3	" key={index}>
	  			   	<Book
	  					title={bookNum.title}
	  					author={bookNum.author}
	  					publisher={bookNum.publisher}/>
	  		        </div>
				)
			})
		}
		return(
			<><div className="container text-center">
			<img className="img-thumbnail" src="https://media.istockphoto.com/photos/silhouette-of-a-businessman-for-use-as-a-profile-picture-picture-id474001632?k=6&m=474001632&s=612x612&w=0&h=rM8jjIP7BvFJVz4Jg7iqta7iKzVqhBmI-8P-Av45Q_U=" alt="..."/>
			<div className="text md-2">Name: User_ABC</div>
			<br/><br/>
			<div className="container text-left">
			   {this.props.booksRead && this.props.booksRead.length>0
				   ?(<div className="row">{bookNum}</div>)
				   :(<div>No Book read yet</div>)

			   }


		      </div>
			</div>
			</>
		);
	}
}

const mapStateToProps=(state)=>{
	let newDict=[]
	for(var i in state.booksList.booksRead){
		newDict.push(state.booksList.booksList[i]);
	}
	return{
	booksRead:newDict
}
}

export default connect(mapStateToProps)(MyProfile);
