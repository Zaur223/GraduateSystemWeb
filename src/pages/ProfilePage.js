import { Link, useParams } from "react-router-dom";
import DummyStudent from "../data/DummyStudent.js";
import BackButton from "../UI/BackButton.js";
import ProfileCard from "../components/ProfileCard.js";
import ProfileInfo from "../components/ProfileInfo.js";
import ProfileAbout from "../components/ProfileAbout.js";
import Box from "@mui/material/Box";
import ProfileSertificates from "../components/ProfileSertificates.js";
import ProfileSkillLists from "../components/ProfileSkillLists.js";

const ProfilePage = () => {
    const { id } = useParams();
    const student = id ? DummyStudent[Number(id)] : null;

    return (
        <>
            <Link to={'..'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><BackButton /></Link>
            <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '39px',}}>
                <ProfileCard student={student} />
                <ProfileInfo student={student} />
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