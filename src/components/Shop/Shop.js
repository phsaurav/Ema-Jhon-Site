import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [updatedCart, setUpdatedCart] = useState([]);

	useEffect(() => {
		fetch('./products.json')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setDisplayProducts(data);
			});
	}, []);

	useEffect(() => {
		if (products.length) {
			const savedCart = getStoredCart();
			let storedCart = [];
			for (const key in savedCart) {
				console.log(savedCart[key]);
				const addedProduct = products.find(
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
	}, [products, updatedCart]);

	const handleAddToCart = (product) => {
		const newCart = [...cart, product];
		// Save to Local Storage
		addToDb(product.key);
		setUpdatedCart(newCart);
	};
	const handleSearch = (e) => {
		const searchText = e.target.value;
		const matchedProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchText.toLowerCase())
		);
		setDisplayProducts(matchedProducts);
	};
	return (
		<div>
			<div className="search-container">
				<input
					type="text"
					onChange={handleSearch}
					placeholder="Search Product"
				/>
			</div>
			<div className="shop-container">
				<div className="product-container">
					{displayProducts.map((product) => (
						<Product
							key={product.key}
							product={product}
							handleAddToCart={handleAddToCart}
						></Product>
					))}
				</div>
				<div className="cart-container">
					<Cart cart={cart}></Cart>
				</div>
			</div>
		</div>
	);
};

export default Shop;
