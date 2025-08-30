import { Button } from "@mui/material";

const StatisticButton = (props) => {
    return (
        <Button sx={{
            width: '100px', 
            height: '35px',
            background: '#ffffff',
            boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
            color: '#000000'
        }}>
            {props.text}
        </Button>
    )
}

export default StatisticButton;