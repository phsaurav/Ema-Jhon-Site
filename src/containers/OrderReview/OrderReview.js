import { Button } from '@mui/material';
import React from 'react';
import useCart from '../../hooks/useCart';
import Cart from '../../components/Cart/Cart';
import ReviewItem from './ReviewItem/ReviewItem';
import './OrderReview.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { yellow } from '@mui/material/colors';

const OrderReview = (props) => {
	let [cart, setCart, handlePlaceOrder, handleRemove] = useCart(
		props.products
	);

	return (
		<div>
			<div className="review-container">
				<div className="review-product-container">
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
								ml: 2,
								py: 1,
								fontSize: '18px',
								bgcolor: yellow[800],
							}}
							onClick={() => handlePlaceOrder(props.product)}
							color="primary"
						>
							<LocalShippingIcon
								sx={{ mr: 1 }}
								fontSize="medium"
							/>
							Shipping
						</Button>
					</Cart>
				</div>
			</div>
		</div>
	);
};

export default OrderReview;
