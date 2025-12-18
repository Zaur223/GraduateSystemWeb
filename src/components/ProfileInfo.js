import { Typography, Box, TextField } from "@mui/material";

const ProfileInfo = (props) => {

    const handleEmailChange = (e) => {
        if (props.onChange) {
            props.onChange({ ...props.student, email: e.target.value });
        }
    };

    const handleDepartmentChange = (e) => {
        if (props.onChange) {
            props.onChange({ ...props.student, department: e.target.value });
        }
    };

    const handleFacultyChange = (e) => {
        if (props.onChange) {
            props.onChange({ ...props.student, faculty: e.target.value });
        }
    };

    const handleGpaChange = (e) => {
        if (props.onChange) {
            props.onChange({ ...props.student, gpa: e.target.value });
        }
    };

    const handleGraduationDateChange = (e) => {
        if (props.onChange) {
            props.onChange({ ...props.student, graduationDate: e.target.value });
        }
    };

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
            {props.isEdit ? (
                <TextField
                    label="Email"
                    variant="standard"
                    value={props.student?.email || ''}
                    onChange={handleEmailChange}
                    fullWidth
                />
            ) : (
                <Typography variant="p" sx={{fontSize: '16px', fontFamily: 'Roboto'}}>
                    <Box component="span" sx={{ fontWeight: 700 }}>Email:</Box> {props.student?.email || 'zaur.hacizalov96@gmail.com'}
                </Typography>
            )}
            {props.isEdit ? (
                <TextField
                    label="Okuduğu Bölüm"
                    variant="standard"
                    value={props.student?.department || ''}
                    onChange={handleDepartmentChange}
                    fullWidth
                />
            ) : (
                <Typography variant="p" sx={{fontSize: '16px', fontFamily: 'Roboto'}}>
                    <Box component="span" sx={{ fontWeight: 700 }}>Okuduğu Bölüm:</Box> {props.student?.department || 'Bilgisayar mühendisliği'}
                </Typography>
            )}
            {props.isEdit ? (
                <TextField
                    label="Fakülte"
                    variant="standard"
                    value={props.student?.faculty || ''}
                    onChange={handleFacultyChange}
                    fullWidth
                />
            ) : (
                <Typography variant="p" sx={{fontSize: '16px', fontFamily: 'Roboto'}}>
                    <Box component="span" sx={{ fontWeight: 700 }}>Fakülte:</Box> {props.student?.faculty || 'Mühendislik'}
                </Typography>
            )}
            {props.isEdit ? (
                <TextField
                    label="GPA"
                    variant="standard"
                    value={props.student?.gpa || ''}
                    onChange={handleGpaChange}
                    fullWidth
                />
            ) : (
                <Typography variant="p" sx={{fontSize: '16px', fontFamily: 'Roboto'}}>
                    <Box component="span" sx={{ fontWeight: 700 }}>GPA:</Box> {props.student?.gpa || '3.5'}
                </Typography>
            )}
            {props.isEdit ? (
                <TextField
                    label="Mezun Tarihi"
                    variant="standard"
                    type="date"
                    value={props.student?.graduationDate ? new Date(props.student.graduationDate).toISOString().split('T')[0] : ''}
                    onChange={handleGraduationDateChange}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                />
            ) : (
                <Typography variant="p" sx={{fontSize: '16px', fontFamily: 'Roboto'}}>
                    <Box component="span" sx={{ fontWeight: 700 }}>Mezun Tarihi:</Box> {props.student?.graduationDate ? new Date(props.student.graduationDate).toLocaleDateString('tr-TR') : '15.06.2026'}
                </Typography>
            )}
        </Box>
    )
}

export default ProfileInfo;