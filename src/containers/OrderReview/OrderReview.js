import { Button } from '@mui/material';
import React from 'react';
import useCart from '../../hooks/useCart';
import Cart from '../../components/Cart/Cart';
import ReviewItem from './ReviewItem/ReviewItem';
import './OrderReview.css';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { red } from '@mui/material/colors';

const OrderReview = (props) => {
	let [cart, handlePlaceOrder, handleRemove] = useCart(props.products);

	return (
		<div>
			<div className="review-container">
				<div className="product-container">
					{cart.map((product) => (
						<ReviewItem
							key={product.key}
							product={product}
							handleRemove={handleRemove}
						></ReviewItem>
					))}
				</div>
				<div className="cart-container">
					<Cart cart={cart}>
						<Button
							variant="contained"
							sx={{
								width: '200px',
								mt: 2,
								ml: 3,
								fontSize: '18px',
								bgcolor: red[400],
							}}
							onClick={() => handlePlaceOrder(props.product)}
							color="primary"
						>
							<DeleteSweepIcon sx={{ mr: 1 }} fontSize="medium" />
							Place Order
						</Button>
					</Cart>
				</div>
			</div>
		</div>
	);
};

export default OrderReview;
