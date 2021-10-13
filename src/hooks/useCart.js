import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
	clearTheCart,
	getStoredCart,
	deleteFromDb,
} from '../services/utilities/fakedb';

const useCart = (products) => {
	const [cart, setCart] = useState([]);
	const history = useHistory();

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
	const handlePlaceOrder = (e) => {
		history.push('/shipping');
		clearTheCart();
		setCart([]);
	};
	const handleRemove = (key) => {
		const newCart = cart.filter((product) => product.key !== key);
		setCart(newCart);
		deleteFromDb(key);
	};

	return [cart, handlePlaceOrder, handleRemove];
};

export default useCart;
