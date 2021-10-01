import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	Typography,
} from '@mui/material';
import React from 'react';
import img from '../../images/giphy.gif';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '40px',
			}}
		>
			<Card sx={{ maxWidth: 600 }}>
				<CardActionArea>
					<CardContent>
						<img src={img} alt="" />
						<Typography variant="h3" component="div" sx={{ mt: 2 }}>
							<CheckCircleOutlineIcon
								fontSize="large"
								sx={{ mr: 1, color: 'green' }}
							/>
							Thank You for the Order!!
						</Typography>
						<Link to="/shop" style={{ textDecoration: 'none' }}>
							<Button
								variant="contained"
								sx={{
									textDecoration: 'none',
									width: '250px',
									mt: 2,
									ml: 3,
									fontSize: '16px',
								}}
								color="primary"
							>
								<StoreIcon sx={{ mr: 1 }} fontSize="medium" />
								Continue Shopping
							</Button>
						</Link>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default PlaceOrder;
