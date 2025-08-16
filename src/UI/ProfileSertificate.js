import { Grid, Typography } from "@mui/material";

const ProfileSertificate = () => {
    return (
        <Grid container spacing={3} alignItems={'center'} marginBottom={'20px'}>
            <Grid size={3}>
                <img src='logo.png' alt="dsfdfd" width={'100%'} />
            </Grid>
            <Grid size={6}>
                <Typography sx={{fontSize: '15px'}}>Hitit Üniversite</Typography>
                <Typography sx={{fontSize: '13px', color: '#AAA'}}>Lisans</Typography>
            </Grid>
            <Grid size={3}>
                <Typography sx={{fontSize: '13px'}}>2022-2026</Typography>
            </Grid>
        </Grid>
    )
}

export default ProfileSertificate;