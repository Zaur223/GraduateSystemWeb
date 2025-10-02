import { Box } from "@mui/material";
import DatePickerViews from "../UI/DatePickerViews.js";
import StatisticCounter from "../UI/StatisticCounter.js";
import StatisticDoughnut from "../modules/StatisticDoughnut.js";

const StatisticGeneral = () => {
    return (
        <Box sx={{
            display: 'flex',
            gap: '200px',
            mx: '35px',
            mt: '35px'
        }}>  
            <Box>
                <Box>
                    <DatePickerViews label={'Mezuniyet Tarihi'} />
                    <Box sx={{mt: '26px'}}>
                        <StatisticCounter text={'Mezunların Sayısı'} count={36} borderColor={'7px solid #FF6384'} /> 
                        <StatisticCounter text={'Yüsek Lisans Yapanlar'} count={10} borderColor={'7px solid #FFC234'} /> 
                        <StatisticCounter text={'İşe Yerleşenler'} count={8} borderColor={'7px solid #36A2EB'} /> 
                        <StatisticCounter text={'İş Arayanlar'} count={6} borderColor={'7px solid #15BA15'} /> 
                    </Box>
                </Box>
            </Box>
            <StatisticDoughnut />
        </Box>
    )
}

export default StatisticGeneral;