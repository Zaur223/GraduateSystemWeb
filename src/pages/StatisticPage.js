import { Typography } from "@mui/material";
import BackButton from "../UI/BackButton";
import Statistic from "../components/Statistic";
import { Link } from "react-router-dom";

const StatisticPage = () => {
    return (
        <>
            <Link to={'..'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><BackButton /></Link>
            <Typography sx={{fontSize: '26px', fontWeight: '700', mt: '30px', color: '#345375'}}>Mezuniyet İstatistiği</Typography>
            <Statistic />
        </>
    )
}

export default StatisticPage;