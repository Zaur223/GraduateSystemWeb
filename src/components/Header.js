import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';


const Header = () => {
    return (
        <Box height={70} py={1} px={5} display={'flex'} alignItems={'center'} bgcolor={'#DBDFEA'} justifyContent={'space-between'}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon sx={{fontSize: 40}} />
            </IconButton>
            <Box
                component="img"
                src="/logo.svg"
                alt="logo"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                }}
            />
            <Box>
                <Button>
                    <Typography sx={{mr: 2, color: '#000000'}}>ad soyad</Typography>
                    <Avatar />
                </Button>
            </Box>
        </Box>
    )
}

export default Header;