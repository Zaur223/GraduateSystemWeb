import { Box, Typography } from "@mui/material";

const ProfileSkillLists = () => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '7px',
                width: '487px',
                minHeight: '186px',
                pt: '15px',
                paddingLeft: '36px',
                background: 'rgba(255, 255, 255, 0.73)',
                boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
                borderRadius: '5px',

            }}>
                <img src="images/skillsIcon.svg" alt="" />
                <Typography variant="h2" sx={{fontSize: '20px', fontWeight: '700', color: '#345375'}}>Yetenekler</Typography>
            </Box>
        </Box>
    )
}

export default ProfileSkillLists;