import { Box } from "@mui/material";
import StatisticButton from "../UI/StatisticButton";
import StatisticGeneral from "./StatisticGeneral";
import { useState } from "react";
import StatisticFaculty from "./StatisticFaculty";

const StatisticBlock = () => {
    const [active, setActive] = useState("Genel");

    return (
        <Box sx={{
            width: '100%',
            minHeight: '506px',
            background: 'rgba(244, 244, 244, 0.73)',
            borderRadius: '5px',
            mt: '22px',
            pb: '30px',
            boxShadow: "0 6px 4px 0 rgba(0, 0, 0, 0.25)",
        }}>
            <Box sx={{width: '100%'}}>
                <Box sx={{
                    display: 'flex',
                    width: '365px',
                    gap: '15px',
                    pt: '36px',
                    pl: '35px'
                }}>
                    <StatisticButton text={'Genel'} isActive={active === 'Genel'} onClick={() => setActive('Genel')} />
                    <StatisticButton text={'Fakülte'} isActive={active === 'Fakülte'} onClick={() => setActive('Fakülte')} />
                    <StatisticButton text={'Öğrenci'} isActive={active === 'Öğrenci'} onClick={() => setActive('Öğrenci')} />
                </Box>
                {active === 'Genel' && <StatisticGeneral />}
                {active === 'Fakülte' && <StatisticFaculty />}
            </Box>
        </Box>
    )
}

export default StatisticBlock;