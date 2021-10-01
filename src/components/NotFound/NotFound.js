import { Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
	return (
		<div>
			<Typography
				align="center"
				variant="h2"
				sx={{
					color: 'text.primary',
					m: 0,
					pt: 2,
					mt: 3,
				}}
			>
				404!
			</Typography>
			<Typography
				align="center"
				variant="h5"
				sx={{
					color: 'text.secondary',
					m: 0,
					pt: 2,
				}}
			>
				Page Not Found!!
			</Typography>
		</div>
	);
};

export default NotFound;
