import React from 'react';
import Rating from '@mui/material/Rating';
import './Product.css';
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box } from '@mui/system';

const Product = (props) => {
	const { name, img, price, stock, seller, star } = props.product;
	return (
		<div className="product-container">
			<Card sx={{ display: 'flex', mt: 5, width: '650px' }}>
				<CardMedia
					component="img"
					sx={{ width: '280px', p: 2 }}
					image={img}
					alt="Live from space album cover"
				/>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography
							component="div"
							variant="h5"
							sx={{ color: 'blue', m: 0, p: 0, fontSize: '22px' }}
						>
							{name}
						</Typography>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
						>
							By: {seller}
						</Typography>
						<Typography
							variant="h6"
							sx={{
								color: 'text.secondary',
								m: 0,
								pt: 2,
								fontSize: '20px',
							}}
						>
							Price: {price}
						</Typography>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
						>
							Only {stock} left in stock - hurry up!!
						</Typography>
					</CardContent>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							pl: 2,
							pb: 1,
						}}
					>
						<Rating
							name="half-rating-read"
							defaultValue={star}
							precision={0.5}
							readOnly
						/>
						<Button
							variant="contained"
							sx={{ width: '200px', mt: 2 }}
							onClick={() => props.handleAddToCart(props.product)}
							color="primary"
						>
							<AddShoppingCartIcon fontSize="small" /> Add to Cart
						</Button>
					</Box>
				</Box>
			</Card>
		</div>
	);
};

export default Product;
