import { Typography, Box } from "@mui/material";

const StatisticCounter = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '365px',
            height: '48px',
            background: '#ffffff',
            px: '20px',
            mt: '12px',
            borderRadius: '5px',
            borderLeft: props.borderColor
        }}>
            <Typography>{props.text}</Typography>
            <Typography>{props.count}</Typography>
        </Box>
    )
}

export default StatisticCounter;