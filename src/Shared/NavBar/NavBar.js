import React from 'react';

import NavElements from './NavElements';

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
	<div className="container-fluid">
	<div className="collapse navbar-collapse" id="navbarCollapse">
		<NavElements/>
				</div>

	</div>
    </nav>
  );
};

export default NavBar;
