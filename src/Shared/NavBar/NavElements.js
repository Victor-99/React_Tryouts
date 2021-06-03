import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'


import {Change_page} from '../../Services/BookStoreServices';


const NavElements = () => {
	const dispatch=useDispatch();
	const onClickFirstPage=()=>{
		dispatch(Change_page(1));
	}
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li>
        <Link className="navbar-brand" to="/" onClick={onClickFirstPage}>
          BookStore
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/MyProfile">
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Wishlist" onClick={onClickFirstPage}>
          Wishlist
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/recommended" onClick={onClickFirstPage}>
          Recommended
        </Link>
      </li>
    </ul>
  );
};


export default NavElements
