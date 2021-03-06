import React,{Component} from 'react';

import {connect} from 'react-redux';
import Elems from '../Shared/Elems/Elems';
import NextPage from '../Shared/NextPage/NextPage';

import {Change_page} from '../Services/BookStoreServices';



class Recommended extends Component {

	NewPage(pageNum){
	    ////("dispatching page");
	    ////(this.props);
	    let pageValue;
	    if (pageNum==="inc"){
		    pageValue=this.props.booksList.curPage%3+1;
	    }
	    else if(pageNum==="dec"){
		    if(this.props.booksList.curPage===1){
			    pageValue=3;
		    }
		    else{
		    		pageValue=this.props.booksList.curPage-1;
	    		}
    		}
	    else{
		    pageValue=Number(pageNum);
	    }
	    this.props.dispatch(Change_page(pageValue));
	    //(pageValue);


    }


  render() {
	  //("props");
	  //(this.props);
    return (
	    <>
      <Elems data={this.props.booksList.booksList.slice((this.props.booksList.curPage-1)*9,this.props.booksList.curPage*9)} sectionTitle="Recommended"/>
	 <NextPage pageNum={{NewPage:this.NewPage.bind(this)}}/>
	 </>
    );
  }
}



const mapStateToProps=(state)=>{
	//("Checking state");
	return{
		booksList:state.booksList
	}
};

export default connect(mapStateToProps)(Recommended);
