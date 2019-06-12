import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = (props) => {
  const tabName = props.tab;
  const tabRefernce = tabName === 'Home' ? '' : tabName.toLowerCase();

	return (
		<nav>
	    <ul><Link to={'/' + tabRefernce}>{tabName}</Link></ul>
		</nav>
	)
}

export default NavbarItem;