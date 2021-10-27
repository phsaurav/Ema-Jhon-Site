import { Button, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { red } from '@mui/material/colors';

const ReviewItem = (props) => {
	const { name, price, seller, quantity, key } = props.product;
	return (
		<div className="product-container">
			<Card sx={{ display: 'flex', mt: 5, width: '700px' }}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography
							component="div"
							variant="h5"
							sx={{ m: 0, p: 0, fontSize: '22px' }}
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
							Quantity: X{quantity}
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
						<Button
							variant="contained"
							sx={{
								width: '180px',
								mt: 1,
								p: 1,
								bgcolor: red[400],
							}}
							onClick={() => props.handleRemove(key)}
							color="primary"
						>
							<RemoveCircleIcon
								sx={{ mr: 1 }}
								fontSize="medium"
							/>
							Remove Item
						</Button>
					</Box>
				</Box>
			</Card>
		</div>
	);
};

export default ReviewItem;
