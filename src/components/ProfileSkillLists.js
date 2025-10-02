import { Box, Typography } from "@mui/material";
import ProfileSkill from "../UI/ProfileSkill.js";

const ProfileSkillLists = () => {
    return (
        <Box sx={{ 
            width: '487px',
            minHeight: '186px',
            pt: '15px',
            px: '36px',
            background: 'rgba(255, 255, 255, 0.73)',
            boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
            borderRadius: '5px',

        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '7px',
                marginBottom: '25px'
            }}>
                <img src="images/skillsIcon.svg" alt="" />
                <Typography variant="h2" sx={{fontSize: '20px', fontWeight: '700', color: '#345375'}}>Yetenekler</Typography>
            </Box>
            <ProfileSkill />
            <ProfileSkill />
            <ProfileSkill />
            <ProfileSkill />
        </Box>
    )
}

export default ProfileSkillLists;