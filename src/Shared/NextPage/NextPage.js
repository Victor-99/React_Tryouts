import React, {Component} from 'react';
import {button} from 'react-router-dom';


class NextPage extends Component {


	render(){
		const onClickHandler=(e)=>{
			e.preventDefault();
			return this.props.pageNum.NewPage(e.target.value);
		}
  return (
    <nav className="p-2" aria-label="Pagination">
      <ul className="pagination justify-content-center mb-0 flex-wrap">
        <li className="page-item disabled">
          <button type="button" className="btn btn-outline-primary" onClick={onClickHandler} value="dec">
            Previous
          </button>
        </li>
        <li className="page-item active">
          <button type="button" className="btn btn-link" onClick={onClickHandler} value="1">
            1
          </button>
        </li>
        <li className="page-item">
          <button type="button" className="btn btn-link" onClick={onClickHandler} value="2">
            2
          </button>
        </li>
        <li className="page-item">
          <button type="button" className="btn btn-link" onClick={onClickHandler} value="3">
            3
          </button>
        </li>
        <li className="page-item">
          <button type="button" className="btn btn-outline-primary" onClick={onClickHandler} value="inc">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
};





export default NextPage;
