import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from "./contexts/ProductContext"


function App() {

	const [products] = useState(data);
	const [cart, setCart] = useState({});

	const addItem = itemId => {
		// add the given item to the cart
		// setCart([...cart, item])
		const newCart = {...cart, [itemId]: cart[itemId] ? cart[itemId] + 1 : 1 }
		setCart(newCart)
	};

	const removeItem = id => {
		if (!cart[id]) {
			return 
		}
		const newCart = {...cart, [id]: cart[id] - 1}
		setCart(newCart);
   };

	return (

		<ProductContext.Provider value={{products, addItem, cart, removeItem}}>
		<div className="App">
			<Navigation cart={cart} products={products} />

			{/* Routes */}
			<Route
				exact
				path="/"
				render={() => (
						<Products
							products={products}
							addItem={addItem}
						/>
				)}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart products={products} cart={cart}  removeItem={removeItem}/>}
			/>
		</div>
	</ProductContext.Provider>
	);
	
}

export default App;
