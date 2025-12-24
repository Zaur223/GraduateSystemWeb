import { Button } from "@mui/material";

const HomeButton = (props) => {
    const { flexDirection, justifyContent, px, width, height, icon, text, ...buttonProps } = props;

    return (
        <Button
            {...buttonProps}
            sx={{
                display: 'flex',
                flexDirection: flexDirection || 'column',
                justifyContent: justifyContent,
                gap: '7px',
                px: px,
                width: width || '176px',
                height: height || '93px',
                fontSize: '13px',
                color: '#345375',
                borderRadius: '13px',
                background: 'rgba(255, 255, 255, 0.90)',
                boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)'
            }}
        >
            <img src={icon} alt="" />
            <span>{text}</span>
        </Button>
    )
}

export default HomeButton;