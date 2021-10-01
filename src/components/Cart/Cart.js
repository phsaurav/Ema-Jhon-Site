import {
	Button,
	Divider,
	List,
	ListItem,
	ListItemButton,
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
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { red } from '@mui/material/colors';

const Cart = (props) => {
	const { cart } = props;
	let total = 0;
	// cart.forEach((cartItem) => total += cartItem.price);
	let totalQuantity = 0;
	console.log(cart);
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
					<Button
						variant="contained"
						sx={{
							width: '200px',
							mt: 2,
							ml: 3,
							fontSize: '18px',
							bgcolor: red[400],
						}}
						onClick={() => props.handleClearCart(props.product)}
						color="primary"
					>
						<DeleteSweepIcon fontSize="medium" /> {''}Clear Cart
					</Button>
				</nav>
			</Box>
		</div>
	);
};

export default Cart;
