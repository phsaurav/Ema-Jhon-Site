import React from 'react';
import { addToDb } from '../../services/utilities/fakedb';
import { Button } from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Pagination from '@mui/material/Pagination';
import Cart from '../../components/Cart/Cart';
import Product from './Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import Box from '@mui/material/Box';

const Shop = (props) => {
	let {cart, setCart} = useCart(props.products);

	const handleChange = (event, value) => {
		console.log(value);
		props.setPage(value - 1);
	};

	const handleAddToCart = (product) => {
		const newCart = [...cart, product];
		// Save to Local Storage
		addToDb(product?.key);
		setCart(newCart);
	};

	return (
		<div>
			<div className="shop-container">
				<Box display="flex" flexDirection="column" alignItems="center">
					<div className="product-container">
						{props.displayProducts.map((product) => (
							<Product
								key={product.key}
								product={product}
								handleAddToCart={handleAddToCart}
							></Product>
						))}
					</div>
					<Pagination
						sx={{ mt: 3, mb: 5, mx: 'auto' }}
						count={props.pageCount}
						variant="outlined"
						shape="rounded"
						onChange={handleChange}
					/>
				</Box>

				<div className="cart-container">
					<Cart cart={cart}>
						<Link to="/review" style={{ textDecoration: 'none' }}>
							<Button
								variant="contained"
								sx={{
									textDecoration: 'none',
									width: '200px',
									mt: 2,
									ml: 3,
									fontSize: '16px',
								}}
								color="primary"
							>
								<FactCheckIcon
									sx={{ mr: 1 }}
									fontSize="medium"
								/>
								Review Order
							</Button>
						</Link>
					</Cart>
				</div>
			</div>
		</div>
	);
};

export default Shop;
