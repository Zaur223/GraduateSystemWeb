import { Grid, Typography } from "@mui/material";

const ProfileSertificate = (props) => {
    const edu = props.edu || { school: 'Hitit Üniversite', degree: 'Lisans', startYear: '2022', endYear: '2026' };
    return (
        <Grid container spacing={3} alignItems={'center'} marginBottom={'20px'}>
            <Grid size={3}>
                <img src='/diplomaIcon.svg' alt="diploma" width={'50%'} style={{marginLeft: '15px'}} />
            </Grid>
            <Grid size={6}>
                <Typography sx={{fontSize: '15px'}}>{edu.school}</Typography>
                <Typography sx={{fontSize: '13px', color: '#AAA'}}>{edu.degree}</Typography>
            </Grid>
            <Grid size={3}>
                <Typography sx={{fontSize: '13px'}}>{edu.startYear}-{edu.endYear}</Typography>
            </Grid>
        </Grid>
    )
}

export default ProfileSertificate;