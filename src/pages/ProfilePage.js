import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

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
            <BackButton onClick={() => navigate(-1)} />
            <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '39px',}}>
                <ProfileCard student={student} />
                <ProfileInfo student={student} />
            </Box>
            <ProfileAbout about={student?.about} />
            <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '52px', pb: '54px'}}>
                <ProfileSertificates student={student} />
                <ProfileSkillLists student={student} />
            </Box>
        </>
    )
}

export default ProfilePage;