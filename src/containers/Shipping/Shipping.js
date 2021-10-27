import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { clearTheCart, getStoredCart } from '../../services/utilities/fakedb';
import { useForm } from 'react-hook-form';

const Shipping = () => {
	const history = useHistory();
	const { user } = useAuth();
	const { handleSubmit, register, reset } = useForm();
	const onSubmit = (data) => {
		const savedCart = getStoredCart();
		data.order = savedCart;
		fetch('https://emma-jhon-server.herokuapp.com/orders', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					history.push('/placeorder');
					clearTheCart();
					reset();
				}
			});
	};

	return (
		<div>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
						<LocalShippingIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Shipping Info
					</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="name"
									label="name"
									name="name"
									autoComplete="name"
									defaultValue={user?.displayName}
									{...register('name')}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									defaultValue={user?.email}
									{...register('email')}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="address"
									label="Address"
									name="address"
									autoComplete="address"
									{...register('address')}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="city"
									label="City"
									name="city"
									autoComplete="city"
									{...register('city')}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="number"
									label="Phone Number"
									name="number"
									autoComplete="number"
									{...register('number')}
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Place Order
						</Button>
					</form>
				</Box>
			</Container>
		</div>
	);
};

export default Shipping;
