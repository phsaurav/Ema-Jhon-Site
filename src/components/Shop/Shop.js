import React, { useEffect, useState } from 'react';
import { addToDb, clearTheCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = (props) => {
	const [cart, setCart] = useState([]);
	const [updatedCart, setUpdatedCart] = useState([]);

	useEffect(() => {
		if (props.products.length) {
			const savedCart = getStoredCart();
			let storedCart = [];
			for (const key in savedCart) {
				console.log(savedCart[key]);
				const addedProduct = props.products.find(
					(product) => product.key === key
				);
				if (addedProduct) {
					const quantity = savedCart[key];
					addedProduct.quantity = quantity;
					storedCart.push(addedProduct);
				}
			}
			setCart(storedCart);
		}
	}, [props.products, updatedCart]);

	const handleAddToCart = (product) => {
		const newCart = [...cart, product];
		// Save to Local Storage
		addToDb(product?.key);
		setUpdatedCart(newCart);
	};

	const handleClearCart = (e) => {
		clearTheCart();
		setUpdatedCart([]);
	};

	
	return (
		<div>
			<div className="shop-container">
				<div className="product-container">
					{props.displayProducts.map((product) => (
						<Product
							key={product.key}
							product={product}
							handleAddToCart={handleAddToCart}
						></Product>
					))}
				</div>
				<div className="cart-container">
					<Cart cart={cart} handleClearCart={handleClearCart}></Cart>
				</div>
			</div>
		</div>
	);
};

export default Shop;
