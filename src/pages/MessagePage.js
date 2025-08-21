import { Box } from '@mui/material';
import Message from '../components/Message';
import BackButton from '../UI/BackButton';
import { Link } from 'react-router-dom';
import MessageUsers from '../components/MessageUsers';

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