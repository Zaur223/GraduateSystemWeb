import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import BackButton from "../UI/BackButton.js";
import ProfileCard from "../components/ProfileCard.js";
import ProfileInfo from "../components/ProfileInfo.js";
import ProfileAbout from "../components/ProfileAbout.js";
import Box from "@mui/material/Box";
import { Button, TextField, IconButton, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ProfileEditPage = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchStudent = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/users/${id}`);
                    const data = await response.json();
                    data.educations = data.educations || [];
                    data.skills = data.skills || [];
                    setStudent(data);
                } catch (error) {
                    console.error('Error fetching student:', error);
                }
            };
            fetchStudent();
        }
    }, [id]);

    const currentUser = useSelector((state) => state.user.user);

    // if logged-in user is not the owner, redirect to the public profile (no edit access)
    useEffect(() => {
        if (currentUser && id && currentUser._id && currentUser._id !== id) {
            navigate(`/profile/${id}`);
        }
    }, [currentUser, id, navigate]);

    const [aboutModalOpen, setAboutModalOpen] = useState(false);
    const [aboutForm, setAboutForm] = useState('');

    const openEditAbout = () => {
        setAboutForm(student.about || '');
        setAboutModalOpen(true);
    };

    const saveAboutFromModal = () => {
        setStudent({ ...student, about: aboutForm });
        setAboutModalOpen(false);
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`http://localhost:5000/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ educations: student.educations, skills: student.skills, about: student.about }),
            });
            if (response.ok) {
                navigate(`/profile/${id}`);
            } else {
                console.error('Error updating student');
            }
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    if (!student) return <div>Loading...</div>;

    const updateEducation = (index, key, value) => {
        const newEdu = [...student.educations];
        newEdu[index] = { ...newEdu[index], [key]: value };
        setStudent({ ...student, educations: newEdu });
    };

    const addEducation = () => {
        setStudent({ ...student, educations: [...student.educations, { school: '', degree: '', startYear: '', endYear: '' }] });
    };

    const removeEducation = (index) => {
        const newEdu = student.educations.filter((_, i) => i !== index);
        setStudent({ ...student, educations: newEdu });
    };

    const updateSkill = (index, value) => {
        const newSkills = [...student.skills];
        newSkills[index] = value;
        setStudent({ ...student, skills: newSkills });
    };

    const addSkill = () => {
        setStudent({ ...student, skills: [...student.skills, ''] });
    };

    const removeSkill = (index) => {
        const newSkills = student.skills.filter((_, i) => i !== index);
        setStudent({ ...student, skills: newSkills });
    };

    return (
        <>
            <BackButton onClick={() => navigate(-1)} />
            <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '39px',}}>
                <ProfileCard student={student} />
                <ProfileInfo student={student} />
            </Box>
            <Box sx={{position: 'relative'}}>
                <ProfileAbout about={student.about} />
                <IconButton onClick={openEditAbout} sx={{position: 'absolute', top: 8, right: 8}} aria-label="edit-about">
                    <EditIcon />
                </IconButton>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '52px', pb: '54px', gap: 4}}>
                <Box sx={{flex: 1}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 700, color: '#345375', mb: 2}}>Eğitim (Düzenle)</Typography>
                    {student.educations.map((edu, idx) => (
                        <Box key={idx} sx={{mb: 2, p: 2, background: 'rgba(255,255,255,0.9)', borderRadius: 1}}>
                            <Box sx={{display: 'flex', gap: 2}}>
                                <TextField label="Okul" value={edu.school} onChange={(e) => updateEducation(idx, 'school', e.target.value)} fullWidth />
                                <TextField label="Derece" value={edu.degree} onChange={(e) => updateEducation(idx, 'degree', e.target.value)} fullWidth />
                            </Box>
                            <Box sx={{display: 'flex', gap: 2, mt: 1}}>
                                <TextField label="Başlangıç Yılı" value={edu.startYear} onChange={(e) => updateEducation(idx, 'startYear', e.target.value)} />
                                <TextField label="Bitiş Yılı" value={edu.endYear} onChange={(e) => updateEducation(idx, 'endYear', e.target.value)} />
                                <IconButton onClick={() => removeEducation(idx)} aria-label="remove">
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    ))}
                    <Button variant="outlined" onClick={addEducation}>Eğitim Ekle</Button>
                </Box>

                <Box sx={{width: '487px'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 700, color: '#345375', mb: 2}}>Yetenekler (Düzenle)</Typography>
                    {student.skills.map((s, idx) => (
                        <Box key={idx} sx={{display: 'flex', alignItems: 'center', gap: 2, mb: 1}}>
                            <TextField value={s} onChange={(e) => updateSkill(idx, e.target.value)} fullWidth />
                            <IconButton onClick={() => removeSkill(idx)} aria-label="remove">
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}
                    <Button variant="outlined" onClick={addSkill}>Yetenek Ekle</Button>
                </Box>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                <Button variant="contained" onClick={handleSave}>Kaydet</Button>
            </Box>

            <Dialog open={aboutModalOpen} onClose={() => setAboutModalOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>Profil Hakkında</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Hakkında"
                        value={aboutForm}
                        onChange={(e) => setAboutForm(e.target.value)}
                        fullWidth
                        multiline
                        rows={6}
                        sx={{mt:1}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setAboutModalOpen(false)}>İptal</Button>
                    <Button variant="contained" onClick={saveAboutFromModal}>Kaydet</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ProfileEditPage;