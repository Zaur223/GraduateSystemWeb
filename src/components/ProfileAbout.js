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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
        </Box>
    )
}

export default ProfileAbout;