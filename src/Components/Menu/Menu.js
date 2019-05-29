import React from 'react';
import './Menu.css'

const icecreams = {
	chocolate: {
		desciption: ''
	},
	vanilla: {
		desciption: ''
	},
	bunnyTracks: {
		desciption: ''
	},
	strawberry: {
		desciption: ''
	},
	rockyRoad: {
		desciption: ''
	},
	caramelCheesecake: {
		desciption: ''
	},
	chocolateChipCookieDough: {
		desciption: ''
	},
	sugarFreeVanilla: {
		desciption: ''
	},
	butterPecan: {
		desciption: ''
	},
	birthdayCake: {
		desciption: ''
	},
	bubblegum: {
		desciption: ''
	},
	cottonCandy: {
		desciption: ''
	},
	blackCherry: {
		desciption: ''
	},
	mintChocolateChip: {
		desciption: ''
	},
	cookiesAndCream: {
		desciption: ''
	},
	orangeSherbet: {
		desciption: ''
	},
}

const Menu = (props) => {
	const icecreamsList = (
		Object.keys(icecreams).map((icecream, index) => {
			//return <li>{icecream}</li>
			return (
				<div>
					<div className="icecream-picture">
					</div>
					<div className="icecream-name">
						{icecream}
					</div>	
				</div>
			)
		})
	)

	return (
		<ul>
			{icecreamsList}
		</ul>
		)

}

export default Menu;