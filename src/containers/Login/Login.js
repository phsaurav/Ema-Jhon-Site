import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import useFirebase from '../../hooks/useFirebase';
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {
	const { setUser, setError, signInUsingGoogle, setIsLoading } =
		useFirebase();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/shop';

	const handleGoogleLogin = () => {
		signInUsingGoogle()
			.then((res) => {
				setUser(res.user);
				history.push(redirect_uri);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
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
						<LoginIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box component="form" noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<Button
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<NavLink to="/recover">
									Forgot password?
								</NavLink>
							</Grid>
							<Grid item>
								<NavLink to="/register">
									{"Don't have an account? Sign Up"}
								</NavLink>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Divider light sx={{ my: 3 }} />
				<Container
					onClick={handleGoogleLogin}
					sx={{
						marginTop: 2,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar
						sx={{
							my: 1,
							bgcolor: 'primary.main',
							'&:hover': {
								bgcolor: 'white',
								border: '2px solid lightblue',
								color: 'white',
							},
						}}
					>
						<GoogleIcon
							sx={{
								'&:hover': {
									color: 'primary.main',
								},
							}}
						/>
					</Avatar>
				</Container>
			</Container>
		</div>
	);
};

export default Login;
