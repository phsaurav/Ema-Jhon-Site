import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar} from '@fortawesome/free-regular-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
	console.log(props.product);
	const { name, img, price, stock, seller,star } = props.product;
	return (
		<div className="product">
			<img src={img} alt="" />
			<div className="product-info">
				<h2 className="product-name">{name}</h2>
				<p>
					<small>By: {seller}</small>
				</p>
				<p>Price: {price}</p>
				<p>
					<small>Only {stock} left in stock - hurry up!!</small>
				</p>
				<Rating
					readonly
					emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
					fullSymbol={<FontAwesomeIcon icon={fullStar} />}
					initialRating = {star}
					className="rating"
				/>
				<br />
				<button
					onClick={() => props.handleAddToCart(props.product)}
					className="btn-regular"
				>
					<FontAwesomeIcon icon={faShoppingCart} />
					{''} Add to Cart
				</button>
			</div>
		</div>
	);
};

export default Product;
