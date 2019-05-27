import React from 'react';
import NavbarItem from './NavbarItem';

const Navbar = (props) => {
	const tabs = ['Home', 'Menu', 'Discounts', 'History', 'Connect'];
	const tabItems = (
		tabs.map((tab, index) => {
			return <NavbarItem tab={tab} />
		})
	)


	return (
		<div>
			{tabItems}
		</div>
	)

}

export default Navbar;