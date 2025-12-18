import { Box, Typography } from "@mui/material";

const ProfileAbout = (props) => {
    const text = props.about || "Profil hakkında bilgi bulunmuyor.";
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '195px',
            background: 'rgba(255, 255, 255, 0.73)',
            boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
            mt: '40px',
            borderRadius: '5px'
        }}>
                <Typography sx={{ fontSize: '14px', px: '17px', pt: '14px', wordBreak: 'break-word' }}>
                    {text}
                </Typography>
        </Box>
    )
}

export default ProfileAbout;