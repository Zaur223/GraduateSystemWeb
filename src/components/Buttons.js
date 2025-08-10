import { Box } from "@mui/material";
import HomeButton from "../UI/HomeButton";
import { Link } from "react-router-dom";

const Buttons = () => {
    return (
        <Box display={'flex'} gap={'25px'} flexWrap={{md: 'nowrap', xs: 'wrap' }} justifyContent={{xs: 'center'}} >
            <Link to={'/graduate'} style={{ textDecoration: 'none' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <HomeButton text={'Mezun Öğrenciler'} icon={'images/graduate.svg'} />
            </Link>
            <HomeButton text={'Mezuniyet İstatistiği'} icon={'images/statistic.svg'} />
            <HomeButton text={'İş Arayanlar'} icon={'images/work.svg'} />
        </Box>
    )
}

export default Buttons;