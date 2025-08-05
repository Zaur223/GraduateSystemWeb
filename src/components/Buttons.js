import { Box } from "@mui/material";
import HomeButton from "../UI/HomeButton";

const Buttons = () => {
    return (
        <Box display={'flex'} gap={'25px'}>
            <HomeButton text={'Mezun Öğrenciler'} icon={'images/graduate.svg'} />
            <HomeButton text={'Mezuniyet İstatistiği'} icon={'images/statistic.svg'} />
            <HomeButton text={'İş Arayanlar'} icon={'images/work.svg'} />
        </Box>
    )
}

export default Buttons;