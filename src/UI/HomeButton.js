import { Button } from "@mui/material";

const homeButton = (props) => {
    return (
        <Button sx={{
                display: 'flex', 
                flexDirection: 'column',
                gap: '7px',
                width: '176px',
                height: '93px',
                fontSize: '13px',
                color: '#345375',
                borderRadius: '13px',
                background: 'rgba(255, 255, 255, 0.90)',
                boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)'

            }}
            >
                <img src={props.icon} alt="" />
                <span>{props.text}</span>
        </Button>
    )
}

export default homeButton;