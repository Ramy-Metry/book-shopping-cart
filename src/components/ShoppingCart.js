import React,{useContext} from 'react';
import ProductContext from "../contexts/ProductContext"


// Components
import Item from './ShoppingCartItem';


const ShoppingCart = ({products, cart,removeItem}) => {
	
	// const {cart}= useContext(ProductContext)
	const cartItems = Object.keys(cart)
			.map(productId => products.find(product => product.id === productId))
	const getCartTotal = () => {
		return cartItems.reduce((acc, value) => {
			return acc +( value.price * cart[value.id]);
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cartItems
			.filter(item => cart[item.id] > 0)
			.map(item =>{
				const quantity = cart[item.id]
				return (<>
					<Item key={item.id} {...item} removeItem={removeItem}/>
					<p>Quantity: {quantity}</p>
				</>)
			})}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
