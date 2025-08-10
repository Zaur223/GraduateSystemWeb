import { Box, Typography } from "@mui/material";
import AnnounceLists from "./AnnounceLists";

const Announcement = () => {
    return (
        <Box sx={{
            width: '100%',
            maxHeight: { xs: '326px', md: '336px' },
            borderRadius: '5px',
            overflowY: 'auto',
            background: 'rgba(255, 255, 255, 0.90)',
            boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
            marginTop: { xs: '20px', lg: '0' },
        }}>
            <Box component="span" sx={{
                display: 'block',
                width: '100%',
                height: '9px',
                backgroundColor: '#628EFF',
                borderRadius: '5px 5px 0 0'
            }}>
            </Box>
            <Box>
                <Typography variant="h2" sx={{
                color: '#345375',
                fontWeight: '700',
                fontSize: '28px',
                padding: '0 30px',
                marginTop: '7px'
                }}>Duyurular
                </Typography>
                <AnnounceLists />
            </Box>
        </Box>
    )
}

export default Announcement;