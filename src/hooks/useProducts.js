import { useEffect, useState } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);
	useEffect(() => {
		fetch('./products.json')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setDisplayProducts(data);
			});
	}, []);

	return [products, displayProducts, setDisplayProducts];
};

export default useProducts;
