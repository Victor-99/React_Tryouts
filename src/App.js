import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "./Shared/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Shared/Footer/Footer";
import MyProfile from "./Containers/MyProfile/MyProfile";
import ViewBook from "./Shared/ViewBook/ViewBook";
import Recommended from './Recommended/Recommended';
import WishList from './WishList/WishList';

function App() {
  return (
    <Router>
      <Header/>
	 <Switch>

	 <Route exact path="/" component={Home}/>
	 <Route path="/MyProfile" component={MyProfile}/>
	 <Route path="/ViewBook" component={ViewBook}/>
	 <Route path="/Wishlist" component={WishList}/>
	 <Route path="/Recommended" component={Recommended}/>
	 </Switch>
	 <Footer year='2021'/>
    </Router>
  );
}

export default App;
