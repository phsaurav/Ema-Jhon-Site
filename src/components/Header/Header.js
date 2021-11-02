import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import { AppBar, Avatar, Button, CssBaseline, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import useFirebase from '../../hooks/useFirebase';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = (props) => {
	const { user, logOut } = useFirebase();
	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));

	return (
		<div>
			<CssBaseline />
			<img className="logo" src={logo} alt="" />
			<AppBar position="relative" color="primary">
				<Toolbar className="header">
					<div className="nav-left-half">
						<NavLink to="/shop">Shop</NavLink>
						<NavLink to="/review">Order Review</NavLink>
						<NavLink to="/inventory">Manage Inventory</NavLink>
						{user.displayName && (
							<NavLink to="/orders">Orders</NavLink>
						)}
					</div>

					<div className="nav-right-half">
						<div className="search-box">
							<div>
								<SearchIconWrapper>
									<SearchIcon />
								</SearchIconWrapper>
							</div>
							<div>
								<input
									autoFocus
									type="text"
									onChange={props.handleSearch}
									placeholder="Search Product"
								/>
							</div>
						</div>
						<div>
							{user.displayName ? (
								<div>
									<Button
										variant="text"
										onClick={logOut}
										title="Log Out"
										sx={{ color: 'white' }}
									>
										<Avatar
											sx={{
												m: 1,
												bgcolor: 'white',
												'&:hover': {
													bgcolor: 'primary.main',
													border: '2px solid white',
													color: 'white',
												},
											}}
										>
											<LogoutIcon
												sx={{
													color: 'primary.main',
													'&:hover': {
														color: 'white',
													},
												}}
											/>
										</Avatar>
										{user.displayName}
									</Button>
								</div>
							) : (
								<NavLink to="/login" title="Log In">
									<Avatar
										sx={{
											m: 1,
											bgcolor: 'white',
											'&:hover': {
												bgcolor: 'primary.main',
												border: '2px solid white',
												color: 'white',
											},
										}}
									>
										<LoginIcon
											sx={{
												color: 'primary.main',
												'&:hover': {
													color: 'white',
												},
											}}
										/>
									</Avatar>
								</NavLink>
							)}
						</div>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
