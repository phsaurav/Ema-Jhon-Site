import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const { user } = useAuth();

	useEffect(() => {
		fetch(`http://localhost:5000/orders?email=${user.email}`)
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, [user]);
	return (
		<div>
			<h1>You have placed: {orders.length} orders</h1>
			<ul>
				{orders.map((order) => (
					<li key={order._id}>
						{order.name} : {order.email}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Orders;
