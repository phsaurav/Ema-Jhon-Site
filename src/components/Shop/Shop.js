import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Button } from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = (props) => {
	const [cart, setCart] = useState([]);
	const [updatedCart, setUpdatedCart] = useState([]);

	useEffect(() => {
		if (props.products.length) {
			const savedCart = getStoredCart();
			let storedCart = [];
			for (const key in savedCart) {
				console.log(savedCart[key]);
				const addedProduct = props.products.find(
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
	}, [props.products, updatedCart]);

	const handleAddToCart = (product) => {
		const newCart = [...cart, product];
		// Save to Local Storage
		addToDb(product?.key);
		setUpdatedCart(newCart);
	};

	return (
		<div>
			<div className="shop-container">
				<div className="product-container">
					{props.displayProducts.map((product) => (
						<Product
							key={product.key}
							product={product}
							handleAddToCart={handleAddToCart}
						></Product>
					))}
				</div>
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
