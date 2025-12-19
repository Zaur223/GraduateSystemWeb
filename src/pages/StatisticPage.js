import { Typography } from "@mui/material";
import BackButton from "../UI/BackButton.js";
import StatisticBlock from "../components/StatisticBlock.js";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StatisticPage = () => {
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
            <Typography sx={{fontSize: '26px', fontWeight: '700', mt: '30px', color: '#345375'}}>Mezuniyet İstatistiği</Typography>
            <StatisticBlock />
        </>
    )
}

export default StatisticPage;