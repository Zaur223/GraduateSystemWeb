import { Avatar, Box, Button, IconButton, Typography, TextField, Tooltip, Dialog } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';

const ProfileCard = (props) => {

    const navigate = useNavigate();
    const icons = [<InstagramIcon />, <LinkedInIcon />, <XIcon />];
    const [jobStatus, setJobStatus] = useState(props.student?.jobStatus || 'not_looking');
    const [avatar, setAvatar] = useState(props.student?.avatar || null);
    const [avatarZoomOpen, setAvatarZoomOpen] = useState(false);
    const { user: currentUser, isAuthenticated } = useSelector((state) => state.user);
    const isOwner = isAuthenticated && currentUser && props.student?._id && String(currentUser._id) === String(props.student._id);

    useEffect(() => {
        setJobStatus(props.student?.jobStatus || 'not_looking');
        setAvatar(props.student?.avatar || null);
    }, [props.student]);

    const handleToggle = async () => {
        if (!isOwner || !props.student?._id) return;
        const newStatus = jobStatus === 'job_seeker' ? 'not_looking' : 'job_seeker';
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`http://localhost:5000/users/${props.student._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token ? `Bearer ${token}` : '',
                },
                body: JSON.stringify({ jobStatus: newStatus })
            });
            if (res.ok) {
                setJobStatus(newStatus);
            } else {
                console.error('Job status güncellenemedi');
            }
        } catch (err) {
            console.error('Job status güncelleme hatası', err);
        }
    };

    const handleNameChange = (e) => {
        if (props.onChange) {
            props.onChange({ ...props.student, firstName: e.target.value });
        }
    };

    const handleLastNameChange = (e) => {
        if (props.onChange) {
            props.onChange({ ...props.student, lastName: e.target.value });
        }
    };

    const handleFacultyChange = (e) => {
        if (props.onChange) {
            props.onChange({ ...props.student, faculty: e.target.value });
        }
    };

    const handleDepartmentChange = (e) => {
        if (props.onChange) {
            props.onChange({ ...props.student, department: e.target.value });
        }
    };

    const handleAvatarChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file || !isOwner) return;

        // Check file size (max 5MB)
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            console.error('Dosya çok büyük. Maksimum 5MB olmalıdır.');
            return;
        }

        try {
            const reader = new FileReader();
            reader.onloadend = async () => {
                try {
                    const img = new Image();
                    img.onload = async () => {
                        const canvas = document.createElement('canvas');
                        const maxWidth = 500;
                        const maxHeight = 500;
                        let width = img.width;
                        let height = img.height;

                        if (width > height) {
                            if (width > maxWidth) {
                                height = Math.round((height * maxWidth) / width);
                                width = maxWidth;
                            }
                        } else {
                            if (height > maxHeight) {
                                width = Math.round((width * maxHeight) / height);
                                height = maxHeight;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, width, height);

                        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8);
                        setAvatar(compressedBase64);
                        
                        const token = localStorage.getItem('token');
                        const res = await fetch(`http://localhost:5000/users/${props.student._id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': token || '',
                            },
                            body: JSON.stringify({ avatar: compressedBase64 })
                        });
                        
                        if (res.ok) {
                            const updatedUser = await res.json();
                            if (props.onChange) {
                                props.onChange(updatedUser);
                            }
                            console.log('Avatar başarıyla yüklendi');
                        } else {
                            console.error('Avatar güncellenemedi:', res.status);
                            setAvatar(props.student?.avatar || null);
                        }
                    };
                    img.onerror = () => {
                        console.error('Resim yüklenemedi');
                        setAvatar(props.student?.avatar || null);
                    };
                    img.src = reader.result;
                } catch (fetchErr) {
                    console.error('Avatar yükleme hatası:', fetchErr);
                    setAvatar(props.student?.avatar || null);
                }
            };
            reader.onerror = () => {
                console.error('Dosya okunamadı');
            };
            reader.readAsDataURL(file);
        } catch (err) {
            console.error('Avatar işleme hatası', err);
        }
    };

    const handleAvatarDelete = async () => {
        if (!isOwner || !props.student?._id) return;

        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`http://localhost:5000/users/${props.student._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token || '',
                },
                body: JSON.stringify({ avatar: null })
            });

            if (res.ok) {
                const updatedUser = await res.json();
                setAvatar(null);
                if (props.onChange) {
                    props.onChange(updatedUser);
                }
                console.log('Avatar başarıyla silindi');
            } else {
                console.error('Avatar silinemedi:', res.status);
            }
        } catch (err) {
            console.error('Avatar silme hatası:', err);
        }
    };

    return (
        <Box sx={{
            position: 'relative',
            width: '554px',
            height: '194px',
            background: 'rgba(255, 255, 255, 0.73)',
            boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
            borderRadius: '5px',
            pt: '18px',
        }}>
            <Box sx={{position: 'absolute', top: 0}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="554" height="100" viewBox="0 0 554 100" fill="none">
                    <path d="M0 5C0 2.23858 2.23858 0 5 0H549C551.761 0 554 2.23858 554 5V100L488.601 60.2416C474.354 51.5806 458.001 47 441.329 47H0V5Z" fill="#628EFF"/>
                </svg>
            </Box>
            {isOwner && currentUser?.role !== 'teacher' && (
                <IconButton onClick={() => navigate(`/profile/${props.student?._id}/edit`)} sx={{position: 'absolute', zIndex: '10', top: '10px', right: '10px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                        <path d="M22.9573 13.5648C22.7534 13.3327 22.6409 13.0342 22.6409 12.7251C22.6409 12.4161 22.7534 12.1175 22.9573 11.8853L24.5859 10.0532C24.7655 9.85298 24.8768 9.60119 24.9043 9.3337C24.9318 9.06621 24.8738 8.79699 24.7386 8.56456L22.1939 4.16228C22.0603 3.93007 21.8566 3.74601 21.6122 3.6364C21.3677 3.52668 21.0949 3.49703 20.8326 3.55156L18.4406 4.03503C18.1363 4.0979 17.8193 4.04726 17.5498 3.89252C17.2801 3.7379 17.0766 3.48978 16.9774 3.19535L16.2012 0.866955C16.1158 0.614185 15.9533 0.394741 15.7364 0.239465C15.5195 0.084188 15.2592 0.00108528 14.9925 0.00173452H9.90315C9.62571 -0.0127652 9.35119 0.0639534 9.12147 0.220204C8.89164 0.376454 8.71937 0.60358 8.63086 0.866955L7.91832 3.19535C7.81909 3.48978 7.61545 3.7379 7.3459 3.89252C7.07636 4.04726 6.75953 4.0979 6.45515 4.03503L3.9995 3.55156C3.75084 3.5164 3.49732 3.55568 3.27095 3.66432C3.04447 3.77295 2.85532 3.94619 2.72721 4.16228L0.18251 8.56456C0.0440055 8.7944 -0.0182134 9.0621 0.00461824 9.32948C0.0274499 9.59686 0.13425 9.85017 0.309761 10.0532L1.92561 11.8853C2.12958 12.1175 2.24212 12.4161 2.24212 12.7251C2.24212 13.0342 2.12958 13.3326 1.92561 13.5648L0.309761 15.397C0.13425 15.6001 0.0274499 15.8533 0.00461824 16.1207C-0.0182134 16.388 0.0440055 16.6557 0.18251 16.8857L2.72721 21.2879C2.86095 21.5202 3.06449 21.7041 3.30893 21.8138C3.55347 21.9234 3.82626 21.9531 4.08856 21.8987L6.48057 21.4152C6.78496 21.3523 7.10179 21.403 7.37133 21.5577C7.64087 21.7123 7.84452 21.9603 7.94375 22.2549L8.71991 24.5833C8.80843 24.8466 8.98069 25.0738 9.21052 25.23C9.44024 25.3863 9.71476 25.463 9.99221 25.4485H15.0816C15.3482 25.4491 15.6086 25.366 15.8254 25.2108C16.0424 25.0555 16.2049 24.8359 16.2903 24.5833L17.0664 22.2549C17.1657 21.9603 17.3692 21.7123 17.6389 21.5577C17.9083 21.403 18.2252 21.3523 18.5296 21.4152L20.9216 21.8987C21.184 21.9531 21.4568 21.9234 21.7013 21.8138C21.9457 21.7041 22.1493 21.5202 22.283 21.2879L24.8277 16.8857C24.9628 16.6531 25.0208 16.3839 24.9933 16.1165C24.9659 15.849 24.8545 15.5971 24.675 15.397L22.9573 13.5648ZM21.0615 15.2698L22.0794 16.4149L20.4508 19.2395L18.9495 18.9341C18.0332 18.7468 17.08 18.9024 16.2707 19.3715C15.4615 19.8407 14.8527 20.5904 14.5599 21.4788L14.0765 22.9038H10.8192L10.3612 21.4534C10.0684 20.565 9.45961 19.8153 8.65044 19.3461C7.84127 18.877 6.88808 18.7214 5.97168 18.9087L4.47031 19.2141L2.81626 16.4022L3.83416 15.257C4.46014 14.5573 4.80618 13.6513 4.80618 12.7123C4.80618 11.7734 4.46014 10.8675 3.83416 10.1676L2.81626 9.0226L4.44488 6.2234L5.94625 6.52876C6.86254 6.71618 7.81585 6.56047 8.62502 6.09139C9.43419 5.62232 10.043 4.87244 10.3358 3.98417L10.8192 2.54643H14.0765L14.5599 3.99683C14.8527 4.8851 15.4615 5.63498 16.2707 6.10405C17.08 6.57324 18.0332 6.72884 18.9495 6.54153L20.4508 6.23617L22.0794 9.0608L21.0615 10.2058C20.4427 10.9041 20.101 11.8048 20.101 12.7378C20.101 13.6708 20.4427 14.5716 21.0615 15.2698ZM12.4479 7.63572C11.4413 7.63572 10.4573 7.93426 9.6203 8.49347C8.78343 9.05269 8.13105 9.84757 7.74594 10.7775C7.36073 11.7075 7.25988 12.7307 7.45627 13.718C7.65267 14.7052 8.13744 15.6121 8.84911 16.3237C9.56089 17.0355 10.4677 17.5203 11.4549 17.7166C12.4422 17.9131 13.4654 17.8122 14.3955 17.427C15.3254 17.0419 16.1203 16.3895 16.6795 15.5527C17.2387 14.7158 17.5372 13.7317 17.5372 12.7251C17.5372 11.3752 17.0011 10.0808 16.0465 9.12637C15.0921 8.17188 13.7976 7.63572 12.4479 7.63572ZM12.4479 15.2698C11.9445 15.2698 11.4527 15.1205 11.0341 14.8409C10.6157 14.5614 10.2895 14.1638 10.0968 13.699C9.90424 13.2339 9.85392 12.7223 9.95206 12.2287C10.0502 11.7351 10.2926 11.2816 10.6485 10.9257C11.0044 10.5699 11.4579 10.3275 11.9514 10.2293C12.445 10.1311 12.9566 10.1816 13.4217 10.3741C13.8866 10.5667 14.2841 10.893 14.5636 11.3114C14.8433 11.7298 14.9925 12.2217 14.9925 12.7251C14.9925 13.4 14.7244 14.0472 14.2472 14.5245C13.77 15.0018 13.1227 15.2698 12.4479 15.2698Z" fill="white"/>
                    </svg>
                </IconButton>
            )}
            <Box sx={{display: 'flex'}}>
                <Box sx={{ position: 'relative' }}>
                    <Avatar 
                        onClick={() => avatar && setAvatarZoomOpen(true)}
                        sx={{
                            width: '118px', 
                            height: '118px',
                            ml: '24px',
                            cursor: avatar ? 'pointer' : 'default',
                            transition: 'transform 0.2s ease',
                            '&:hover': avatar ? {
                                transform: 'scale(1.05)'
                            } : {}
                        }}
                        src={avatar || ''}
                    />
                    {isOwner && (
                        <Box sx={{
                            position: 'absolute',
                            bottom: '-10px',
                            right: '-10px',
                            display: 'flex',
                            gap: '8px',
                            flexDirection: 'column-reverse'
                        }}>
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="avatar-upload"
                                type="file"
                                onChange={handleAvatarChange}
                            />
                            <label htmlFor="avatar-upload">
                                <Tooltip title="Resim Yükle" arrow>
                                    <IconButton
                                        component="span"
                                        sx={{
                                            backgroundColor: '#69A2E3',
                                            color: 'white',
                                            width: '45px',
                                            height: '45px',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: '#5a8fc7',
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                                transform: 'scale(1.1)'
                                            }
                                        }}
                                    >
                                        <PhotoCameraIcon sx={{ fontSize: '22px' }} />
                                    </IconButton>
                                </Tooltip>
                            </label>
                            {avatar && (
                                <Tooltip title="Resmi Sil" arrow>
                                    <Box sx={{ ml: '15px' }}>
                                        <IconButton
                                            onClick={handleAvatarDelete}
                                            sx={{
                                                backgroundColor: '#ef5350',
                                                color: 'white',
                                                width: '35px',
                                                height: '35px',
                                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#c62828',
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                                    transform: 'scale(1.1)'
                                                }
                                            }}
                                        >
                                            <DeleteIcon sx={{ fontSize: '16px' }} />
                                        </IconButton>
                                    </Box>
                                </Tooltip>
                            )}
                        </Box>
                    )}
                </Box>
                <Box sx={{mt: '30px', ml: '22px'}}>
                    {props.isEdit ? (
                        <Box sx={{display: 'flex', gap: 1}}>
                            <TextField
                                variant="standard"
                                value={props.student?.firstName || ''}
                                onChange={handleNameChange}
                                placeholder="First Name"
                                sx={{minWidth: '100px'}}
                            />
                            <TextField
                                variant="standard"
                                value={props.student?.lastName || ''}
                                onChange={handleLastNameChange}
                                placeholder="Last Name"
                                sx={{minWidth: '100px'}}
                            />
                        </Box>
                    ) : (
                        <Typography variant="h6" sx={{fontWeight: '700'}}>{props.student ? `${props.student.firstName} ${props.student.lastName}` : 'Zaur Hajizalov'}</Typography>
                    )}
                    {props.isEdit ? (
                        <TextField
                            variant="standard"
                            value={props.student?.faculty || ''}
                            onChange={handleFacultyChange}
                            placeholder="Faculty"
                            sx={{display: 'block', mt: '5px'}}
                        />
                    ) : (
                        <Typography variant="span" sx={{display: 'block', fontFamily: 'Roboto', fontSize: '14px', color: '#5F5F5F', mt: '5px'}}>{props.student?.faculty || 'Hitit Üniversite öğrencisi'}</Typography>
                    )}
                    {props.isEdit ? (
                        <TextField
                            variant="standard"
                            value={props.student?.department || ''}
                            onChange={handleDepartmentChange}
                            placeholder="Department"
                            sx={{display: 'block'}}
                        />
                    ) : (
                        <Typography variant="span" sx={{display: 'block', fontFamily: 'Roboto', fontSize: '14px', color: '#5F5F5F'}}>{props.student?.department || 'Azerbaycan, Bakü'}</Typography>
                    )}
                </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box sx={{display: 'flex', flexDirection: 'column',ml: '24px'}}>
                    <Box>
                        {icons.map((icon, index) => (
                            <IconButton key={index} sx={{color: '#69A2E3', padding: '10px'}}>
                                {icon}
                            </IconButton>
                        ))}
                    </Box>
                    <Box sx={{
                        width: `${icons.length * 44}px`,
                        height: '5px',
                        backgroundColor: '#628EFF',
                        borderRadius: '5px',
                    }} />
                </Box>
                
                <Box>
                    {currentUser?.role === 'teacher' && !isOwner && (
                        <Link to={'/message'} style={{ textDecoration: 'none' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Button variant="contained" sx={{
                                backgroundColor: '#69A2E3',
                                color: '#fff',
                                height: '40px',
                                mr: '10px'
                            }}>Mesaj Yaz</Button>
                        </Link>
                    )}
                    {isOwner && (
                        <Button 
                            variant="contained" 
                            onClick={handleToggle}
                            sx={{
                                backgroundColor: jobStatus === 'job_seeker' ? '#d32f2f' : '#69A2E3',
                                color: '#fff',
                                height: '40px',
                                mr: '24px',
                                '&:hover': {
                                    backgroundColor: jobStatus === 'job_seeker' ? '#b71c1c' : '#5a8fc7',
                                }
                            }}
                        >
                            {jobStatus === 'job_seeker' ? 'İptal et' : 'Aktif et'}
                        </Button>
                    )}
                </Box>
            </Box>

            <Dialog 
                open={avatarZoomOpen} 
                onClose={() => setAvatarZoomOpen(false)}
                maxWidth="md"
                PaperProps={{
                    sx: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        overflow: 'visible'
                    }
                }}
            >
                <Box 
                    onClick={() => setAvatarZoomOpen(false)}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        p: 2
                    }}
                >
                    <img 
                        src={avatar || ''} 
                        alt="Avatar" 
                        style={{
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                        }}
                    />
                </Box>
            </Dialog>
        </Box>
    )
}

export default ProfileCard;