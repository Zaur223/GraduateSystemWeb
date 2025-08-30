import { Button } from "@mui/material";

const HomeButton = (props) => {
    return (
        <Button sx={{
                display: 'flex',
                flexDirection: props.flexDirection || 'column',
                justifyContent: props.justifyContent,
                gap: '7px',
                px: props.px,
                width: props.width || '176px',
                height: props.height || '93px',
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

export default HomeButton;