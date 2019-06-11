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

	const formatIcecreams = () => {
		let grid = {};
		let row = 0;
		Object.keys(icecreams).map((icecream, index) => {
			if (grid[row] === undefined) {
				grid[row] = []
			}
			if (index % 4 === 0) {
				row++
			}
		})
		console.log(grid)
	}

	const icecreamsList = (
		Object.keys(icecreams).map((icecream, index) => {
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

	formatIcecreams()
	return (
		<ul>
			{icecreamsList}
		</ul>
		)

}

export default Menu;