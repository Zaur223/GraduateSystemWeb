import { Box } from "@mui/material";
import DatePickerViews from "../UI/DatePickerViews";
import StatisticCounter from "../UI/StatisticCounter";

const StatisticGeneral = (props) => {
    return (
        <Box sx={{
            ml: '35px',
            mt: '35px'
        }}>
            <DatePickerViews label={'Mezuniyet Tarihi'} />
            <Box sx={{mt: '26px'}}>
                <StatisticCounter text={'Mezunların Sayısı'} count={36} borderColor={'7px solid #FF6384'} /> 
                <StatisticCounter text={'Yüsek Lisans Yapanlar'} count={10} borderColor={'7px solid #FFC234'} /> 
                <StatisticCounter text={'İşe Yerleşenler'} count={8} borderColor={'7px solid #36A2EB'} /> 
                <StatisticCounter text={'İşsiz'} count={6} borderColor={'7px solid #15BA15'} /> 
            </Box>
        </Box>
    )
}

export default StatisticGeneral;