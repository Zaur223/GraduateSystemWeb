import { Avatar, Button, Typography } from "@mui/material";

const MessageUser = () => {
    return (
        <Button sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            pl: '16px',
            mb: '5px',
            gap: '8px',
            width: '100%',
            height: '60px',
            background: '#ffffff',
        }}>
            <Avatar sx={{width: '36px', height: '36px'}} />
            <Typography sx={{fontSize: '13px', color: '#000000'}}>Zaur Hajizalov</Typography>
        </Button>
    )
}

export default MessageUser;