import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({cart, products}) => {
	const cartItems = Object.keys(cart)
			.map(productId => products.find(product => product.id === productId))
	const getCartTotal = () => {
		return cartItems.reduce((acc, value) => {
			return acc + cart[value.id];
		}, 0);
	};
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{getCartTotal()}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
