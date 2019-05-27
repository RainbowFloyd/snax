import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = (props) => {
  const tabName = props.tab;
  const tabRefernce = tabName === 'Home' ? '' : tabName.toLowerCase();

	return (
		<span>
			<button><Link to={'/' + tabRefernce}>{tabName}</Link></button>
		</span>
	)
}

export default NavbarItem;