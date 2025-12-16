import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackButton from "../UI/BackButton.js";
import ProfileCard from "../components/ProfileCard.js";
import ProfileInfo from "../components/ProfileInfo.js";
import ProfileAbout from "../components/ProfileAbout.js";
import Box from "@mui/material/Box";
import ProfileSertificates from "../components/ProfileSertificates.js";
import ProfileSkillLists from "../components/ProfileSkillLists.js";

const ProfilePage = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchStudent = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/users/${id}`);
                    const data = await response.json();
                    setStudent(data);
                } catch (error) {
                    console.error('Error fetching student:', error);
                }
            };
            fetchStudent();
        }
    }, [id]);

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