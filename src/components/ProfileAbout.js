import { Box, Typography } from "@mui/material";

const ProfileAbout = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '937px',
            height: '195px',
            background: 'rgba(255, 255, 255, 0.73)',
            boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
            mt: '40px',
            borderRadius: '5px'
        }}>
                <Typography sx={{ fontSize: '14px', px: '17px', pt: '14px', wordBreak: 'break-word' }}>
                    Hakkın
                </Typography>
        </Box>
    )
}

export default ProfileAbout;