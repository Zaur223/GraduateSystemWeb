import { Typography, Box } from "@mui/material";

const ProfileInfo = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            background: 'rgba(255, 255, 255, 0.73)',
            width: '487px',
            height: '186px',
            boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
            borderTop: '8px solid #628EFF',
            borderRadius: '5px',
            pl: '24px',
            pt: '18px'
        }}>
            <Typography variant="p" sx={{fontSize: '16px', fontFamily: 'Roboto'}}>
                <Box component="span" sx={{ fontWeight: 700 }}>Email:</Box> zaur.hacizalov96@gmail.com
            </Typography>
            <Typography variant="p" sx={{fontSize: '16px', fontFamily: 'Roboto'}}>
                <Box component="span" sx={{ fontWeight: 700 }}>Okuduğu Bölüm:</Box> Bilgisayar mühendisliği
            </Typography>
            <Typography variant="p" sx={{fontSize: '16px', fontFamily: 'Roboto'}}>
                <Box component="span" sx={{ fontWeight: 700 }}>Çalıştığı Yer:</Box> ------
            </Typography>
            <Typography variant="p" sx={{fontSize: '16px', fontFamily: 'Roboto'}}>
                <Box component="span" sx={{ fontWeight: 700 }}>Çalıştığı Alan:</Box> Frontend
            </Typography>
            <Typography variant="p" sx={{fontSize: '16px', fontFamily: 'Roboto'}}>
                <Box component="span" sx={{ fontWeight: 700 }}>Mezun Tarihi:</Box> 15.06.2026
            </Typography>
        </Box>
    )
}

export default ProfileInfo;