import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Message from '../components/Message.js';
import BackButton from '../UI/BackButton.js';
import MessageUsers from '../components/MessageUsers.js';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MessagePage = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.user.user);

    useEffect(() => {
        if (currentUser && currentUser.role === 'student') {
            navigate(`/profile/${currentUser._id}`);
        }
    }, [currentUser, navigate]);
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