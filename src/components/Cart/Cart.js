import React from 'react';
import './Cart.css';

const Cart = (props) => {
	const { cart } = props;
	let total = 0;
	// cart.forEach((cartItem) => total += cartItem.price);
	let totalQuantity = 0;
	console.log(cart);
	for (const product of cart) {
		if(!product.quantity){
			product.quantity = 1;
		}
		total += product.price * product.quantity;
		totalQuantity += product.quantity;
	}
	const shipping = total > 0 ? 15 : 0;
	const tax = (total + shipping) * 0.1;
	const grandTotal = total + shipping + tax;
	return (
		<div>
			<h3>Order Summary</h3>
			<h5>Items Order: {totalQuantity}</h5>
			<h5>Total Price: {total.toFixed(2)}</h5>
			<p> Shipping: {shipping}</p>
			<p>tax: {tax.toFixed(2)}</p>
			<p>Grand Total: {grandTotal.toFixed(2)}</p>
		</div>
	);
};

export default Cart;
