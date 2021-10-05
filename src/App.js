import { useEffect, useState } from 'react';
import './App.css';
import Shop from './containers/Shop/Shop';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OrderReview from './containers/OrderReview/OrderReview';
import Inventory from './containers/Inventory/Inventory';
import NotFound from './containers/NotFound/NotFound';
import PlaceOrder from './containers/PlaceOrder/PlaceOrder';

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
			<Router>
				<Header key="editor1" handleSearch={handleSearch}></Header>
				<Switch>
					<Route path="/" exact>
						<Shop
							products={products}
							setProducts={setProducts}
							displayProducts={displayProducts}
							setDisplayProducts={setDisplayProducts}
						></Shop>
					</Route>
					<Route path="/shop">
						<Shop
							products={products}
							setProducts={setProducts}
							displayProducts={displayProducts}
							setDisplayProducts={setDisplayProducts}
						></Shop>
					</Route>
					<Route path="/review">
						<OrderReview products={products}></OrderReview>
					</Route>
					<Route path="/inventory">
						<Inventory></Inventory>
					</Route>
					<Route path="/placeorder">
						<PlaceOrder></PlaceOrder>
					</Route>
					<Route>
						<NotFound></NotFound>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
