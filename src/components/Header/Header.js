import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
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
					<div>
						<NavLink to="/shop">Shop</NavLink>
						<NavLink to="/review">Order Review</NavLink>
						<NavLink to="/inventory">Manage Inventory</NavLink>
					</div>
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
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
