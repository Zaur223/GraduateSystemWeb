import { Link } from "react-router-dom";
import BackButton from "../UI/BackButton";
import ProfileCard from "../components/ProfileCard";
import ProfileInfo from "../components/ProfileInfo";
import ProfileAbout from "../components/ProfileAbout";
import Box from "@mui/material/Box";
import ProfileSertificates from "../components/ProfileSertificates";
import ProfileSkillLists from "../components/ProfileSkillLists";

const ProfilePage = () => {
    return (
        <>
            <Link to={'..'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><BackButton /></Link>
            <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '39px',}}>
                <ProfileCard />
                <ProfileInfo />
            </Box>
            <ProfileAbout />
            <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '52px', pb: '54px'}}>
                <ProfileSertificates />
                <ProfileSkillLists />
            </Box>
        </>
    )
}

export default ProfilePage;