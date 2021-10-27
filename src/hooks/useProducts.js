import { useEffect, useState } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);
	const [pageCount, setPageCount] = useState(0);

	useEffect(() => {
		fetch('https://emma-jhon-server.herokuapp.com/products')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
				setDisplayProducts(data.products);
				const count = data.count;
				const pageNumber = Math.ceil(count / 10);
				setPageCount(pageNumber);
			});
	}, []);

	return [products, displayProducts, setDisplayProducts, pageCount];
};

export default useProducts;
