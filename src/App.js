import { useEffect, useState } from 'react';
import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';

function App() {
	const [products, setProducts] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);

	const handleSearch = (e) => {
		const searchText = e.target.value;
		const matchedProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchText.toLowerCase())
		);
		setDisplayProducts(matchedProducts);
		console.log(e.target.value);
	};
	useEffect(() => {
		fetch('./products.json')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setDisplayProducts(data);
			});
	}, []);
	return (
		<div className="App">
			<Header key="editor1" handleSearch={handleSearch}></Header>
			<Shop
				products={products}
				setProducts={setProducts}
				displayProducts={displayProducts}
				setDisplayProducts={setDisplayProducts}
			></Shop>
		</div>
	);
}

export default App;
