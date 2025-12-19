import Slider from '../modules/Slider.js'
import Box from "@mui/material/Box"
import Buttons from '../components/Buttons.js'
import Announcement from '../components/Announcement.js'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.user.user);

    useEffect(() => {
        if (currentUser && currentUser.role === 'student') {
            navigate(`/profile/${currentUser._id}`);
        }
    }, [currentUser, navigate]);
    return (
        <>
            <Box sx={{p: 5}}>
                <Slider />
                <Box mt={6} display={'flex'} gap={3} flexDirection={{lg: 'row', xs: 'column'}} alignItems={{md: 'flex-start', xs: 'center'}}>
                    <Buttons />
                    <Announcement />
                </Box>
            </Box>
        </>
    )
}

export default HomePage