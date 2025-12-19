import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/user-slice.js';
import { useNavigate } from 'react-router-dom';
import { useDrawerMenu } from '../modules/Drawer_module.js';



const Header = () => {

    const { toggleMenuHandler } = useDrawerMenu();
    const user = useSelector(state => state.user.user);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/auth');
        handleClose();
    };

    const handleProfileEdit = () => {
        handleClose();
        if (!isAuthenticated) {
            navigate('/auth');
            return;
        }
        if (user && user._id) {
            navigate(`/profile/${user._id}`);
        }
    };

    return (
        <Box height={70} py={1} px={5} display={'flex'} alignItems={'center'} bgcolor={'#DBDFEA'} justifyContent={'space-between'}>
            <IconButton onClick={toggleMenuHandler} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon sx={{fontSize: 40}} />
            </IconButton>
            <Box
                component="img"
                src="/main_logo.svg"
                alt="logo"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                }}
            />
            <Box>
                <Button onClick={handleClick}>
                    <Typography sx={{mr: 2, color: '#000000'}}>
                        {isAuthenticated ? `${user.firstName} ${user.lastName}` : 'ad soyad'}
                    </Typography>
                    <Avatar />
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleProfileEdit}>Kullanıcı Ayarları</MenuItem>
                    <MenuItem onClick={handleLogout}>Çıkış Yap</MenuItem>
                </Menu>
            </Box>
        </Box>
    )
}

export default Header;