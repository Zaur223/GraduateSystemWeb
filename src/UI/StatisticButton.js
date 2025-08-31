import { Button } from "@mui/material";

const StatisticButton = (props) => {
    return (
        <Button
            sx={{
                width: '100px',
                height: '35px',
                background: props.isActive ? '#2196f3' : '#ffffff',
                color: props.isActive ? '#fff' : '#000',
                boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
                fontWeight: props.isActive ? 700 : 400,
                '&:hover': {
                    background: props.isActive ? '#1976d2' : '#f0f0f0',
                },
            }}
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    )
}

export default StatisticButton;