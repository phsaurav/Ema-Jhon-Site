import React from 'react';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css';

const OrderReview = (props) => {
	let [cart, handleClearCart, handleRemove] = useCart(props.products);

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
					<Cart cart={cart} handleClearCart={handleClearCart}></Cart>
				</div>
			</div>
		</div>
	);
};

export default OrderReview;
