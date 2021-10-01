import { useEffect, useState } from 'react';
import { clearTheCart, getStoredCart, deleteFromDb } from '../utilities/fakedb';

const useCart = (products) => {
	const [cart, setCart] = useState([]);

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
	}, [products]);
	const handleClearCart = (e) => {
		clearTheCart();
		setCart([]);
	};
	const handleRemove = (key) => {
		const newCart = cart.filter((product) => product.key !== key);
		setCart(newCart);
		deleteFromDb(key);
	};

	return [cart, handleClearCart, handleRemove];
};

export default useCart;
