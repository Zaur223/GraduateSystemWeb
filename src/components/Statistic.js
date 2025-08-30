import { Box } from "@mui/material";
import StatisticButton from "../UI/StatisticButton";
import StatisticGeneral from "./StatisticGeneral";


const Statistic = () => {
    return (
        <Box sx={{
            width: '100%',
            minHeight: '506px',
            background: 'rgba(244, 244, 244, 0.73)',
            borderRadius: '5px',
            mt: '42px',
            boxShadow: "0 6px 4px 0 rgba(0, 0, 0, 0.25)",
        }}>
            <Box sx={{width: '365px'}}>
                <Box sx={{
                    display: 'flex',
                    gap: '15px',
                    pt: '36px',
                    pl: '35px'
                }}>
                    <StatisticButton text={'Genel'} />
                    <StatisticButton text={'Fakülte'} />
                    <StatisticButton text={'Öğrenci'} />
                </Box>
                <StatisticGeneral />
            </Box>
        </Box>
    )
}

export default Statistic;