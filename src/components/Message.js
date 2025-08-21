import { Avatar, Box, IconButton, Typography } from '@mui/material';

const Message = () => {
    return (
        <>
            <Box sx={{
                display: 'grid',
                gridTemplateRows: '60px auto 70px',
                height: '600px',
                width: '100%',
                borderRadius: '7px',
                background: 'rgba(209, 209, 209, 0.5)',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gridRow: '1 / 2',
                    gap: '12px',
                    backgroundColor: '#DBDFEA',
                    borderRadius: '7px',
                    py: '8px'
                }}>
                    <Avatar sx={{ml: '28px'}} />
                    <Typography variant="span" sx={{fontFamily: 'Roboto'}}>Zaur Hajizalov</Typography>
                </Box>
                <Box sx={{
                    height: '100%',
                    gridRow: '2 / 3',
                }}>

                </Box>
                <Box sx={{
                    position: 'relative',
                    gridRow: '3 / 4',
                    display: 'flex',
                    mb: '30px',
                    px: '40px'
                }}>
                    <input type='text' style={{
                        width: '100%', 
                        borderRadius: '20px',
                        paddingLeft: '10px',
                        paddingRight: '60px', 
                        border: 'none', 
                        outline: 'none',
                    }} />
                    <IconButton sx={{
                        position: 'absolute',
                        right: '50px',
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
                            <path d="M28.2832 14.2588L9.11585 23.2927L12.7274 14.1299L9.2682 4.90856L28.2832 14.2588Z" stroke="#818181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}

export default Message;