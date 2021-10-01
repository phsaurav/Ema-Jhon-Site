import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Cart.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const Cart = (props) => {
	const { cart } = props;
	let total = 0;
	// cart.forEach((cartItem) => total += cartItem.price);
	let totalQuantity = 0;
	for (const product of cart) {
		if (!product.quantity) {
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
			<Box
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
			>
				<nav aria-label="main mailbox folders">
					<List>
						<ListItem>
							<Typography
								align="center"
								variant="h6"
								sx={{
									color: 'text.secondary',
									m: 0,
									pt: 2,
									fontSize: '24px',
								}}
							>
								Order Summary:
							</Typography>
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemIcon>
								<ShoppingBasketIcon fontSize="medium" />
							</ListItemIcon>
							<ListItemText>
								Item Order: {totalQuantity}
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<MonetizationOnIcon />
							</ListItemIcon>
							<ListItemText>
								Item Price: {total.toFixed(2)}
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LocalShippingIcon />
							</ListItemIcon>
							<ListItemText>Shipping: {shipping}</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<AccountBalanceIcon />
							</ListItemIcon>
							<ListItemText>Tax: {tax.toFixed(2)}</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<LocalAtmIcon />
							</ListItemIcon>
							<Typography sx={{ fontWeight: 'bold' }}>
								Total: {grandTotal.toFixed(2)}
							</Typography>
						</ListItem>
					</List>
					{props.children}
				</nav>
			</Box>
		</div>
	);
};

export default Cart;
