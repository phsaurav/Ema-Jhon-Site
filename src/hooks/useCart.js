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
		const savedCart = getStoredCart();
		const keys = Object.keys(savedCart);
		fetch('https://emma-jhon-server.herokuapp.com/products/bykeys', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(keys),
		})
			.then((res) => res.json())
			.then((products) => {
				console.log(products);
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
			});
	}, [products]);

	const ClearCart = (e) => {
		clearTheCart();
		setCart([]);
	};
	const handleRemove = (key) => {
		const newCart = cart.filter((product) => product.key !== key);
		setCart(newCart);
		deleteFromDb(key);
	};

	return [cart, setCart, ClearCart, handleRemove];
};

export default useCart;
