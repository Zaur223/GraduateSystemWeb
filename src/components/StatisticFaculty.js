import ComboBox from "../UI/ComboBox";
import { Box } from "@mui/material";
import DummyFaculty from "../data/DummyFaculty";
import StatisticCounter from "../UI/StatisticCounter";
import LineChart from "../modules/LineChart";

const StatisticFaculty = () => {
    return (
        <Box sx={{
            display: 'flex',
            gap: '40px',
            mx: '35px',
            mt: '35px'
        }}>
            <Box>
                <ComboBox options={DummyFaculty} label={'Fakülte'} />
                <Box sx={{mt: '26px'}}>
                    <StatisticCounter text={'Mezunların Sayısı'} count={36} borderColor={'7px solid #FF6384'} /> 
                    <StatisticCounter text={'Yüsek Lisans Yapanlar'} count={10} borderColor={'7px solid #FFC234'} />
                </Box> 
            </Box>
            <Box sx={{width: '100%'}}>
                <LineChart />
            </Box>
        </Box>
    )
}

export default StatisticFaculty;