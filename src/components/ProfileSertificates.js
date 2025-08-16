import { Box, Typography } from "@mui/material";
import CertificateIcon from "../assets/icons/CertificateIcon";
import SquareIcon from "../assets/icons/squareIcon";
import ProfileSertificate from "../UI/ProfileSertificate";

const ProfileSertificates = () => {
    return (
        <>
            <Box sx={{
                position: 'relative',
                pl: '36px',
                width: '554px',
                minHeight: '216px',
                background: 'rgba(255, 255, 255, 0.73)',
                boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
                borderRadius: '5px'
                }}>
                <Box>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '7px', pt: '15px'}}>
                        <CertificateIcon />
                        <Typography variant="h2" sx={{fontSize: '20px', fontWeight: '700', color: '#345375'}}>Eğitim</Typography>
                    </Box>
                    <Box sx={{position: 'absolute', top: '0', right: '15px'}}>
                        <SquareIcon />
                    </Box>
                </Box>
                <Box sx={{mt: '40px'}}>
                    <ProfileSertificate />
                    <ProfileSertificate />
                    <ProfileSertificate />
                </Box>
            </Box>

        </>
    ) 
}

export default ProfileSertificates;