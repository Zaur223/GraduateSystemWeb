import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Message from '../components/Message.js';
import BackButton from '../UI/BackButton.js';
import MessageUsers from '../components/MessageUsers.js';

const MessagePage = () => {
    return (
        <>
            <Link to={'..'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><BackButton /></Link>
            <Box sx={{display: 'flex', gap: '20px', mt: '35px',}}>
                <MessageUsers />
                <Message />
            </Box>
        </>
    )
       
}

export default MessagePage;