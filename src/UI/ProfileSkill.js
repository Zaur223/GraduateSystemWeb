import { Box, Typography } from "@mui/material";

const ProfileSkill = (props) => {
    const skill = props.skill || 'React';
    return (
        <Box sx={{borderBottom: '2px solid #D9D9D9', marginTop: '7px'}}>
            <Box>
                <Typography>{skill}</Typography>
            </Box>
        </Box>
    )
}

export default ProfileSkill;