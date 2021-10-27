import { useEffect, useState } from 'react';
import './App.css';
import Shop from './containers/Shop/Shop';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OrderReview from './containers/OrderReview/OrderReview';
import Inventory from './containers/Inventory/Inventory';
import NotFound from './containers/NotFound/NotFound';
import PlaceOrder from './containers/PlaceOrder/PlaceOrder';
import Shipping from './containers/Shipping/Shipping';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
	const [products, setProducts] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [page, setPage] = useState(0);
	const size = 10;

	const handleSearch = (e) => {
		const searchText = e.target.value;
		const matchedProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchText.toLowerCase())
		);
		setDisplayProducts(matchedProducts);
		console.log(e.target.value);
	};

	useEffect(() => {
		fetch(
			`https://emma-jhon-server.herokuapp.com/products?page=${page}&&size=${size}`
		)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
				setDisplayProducts(data.products);
				const count = data.count;
				const pageNumber = Math.ceil(count / size);
				setPageCount(pageNumber);
			});
	}, [page]);

	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Header key="editor1" handleSearch={handleSearch}></Header>
					<Switch>
						<Route path="/" exact>
							<Shop
								products={products}
								pageCount={pageCount}
								page={page}
								setPage={setPage}
								setProducts={setProducts}
								displayProducts={displayProducts}
								setDisplayProducts={setDisplayProducts}
							></Shop>
						</Route>
						<Route path="/shop">
							<Shop
								products={products}
								pageCount={pageCount}
								page={page}
								setPage={setPage}
								setProducts={setProducts}
								displayProducts={displayProducts}
								setDisplayProducts={setDisplayProducts}
							></Shop>
						</Route>
						<Route path="/review">
							<OrderReview products={products}></OrderReview>
						</Route>
						<PrivateRoute path="/inventory">
							<Inventory></Inventory>
						</PrivateRoute>
						<PrivateRoute path="/placeorder">
							<PlaceOrder></PlaceOrder>
						</PrivateRoute>
						<PrivateRoute path="/shipping">
							<Shipping></Shipping>
						</PrivateRoute>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/register">
							<Register></Register>
						</Route>
						<Route>
							<NotFound></NotFound>
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
