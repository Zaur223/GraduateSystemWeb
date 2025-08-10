import { Box, Typography } from "@mui/material";
import StudentList from "../UI/StudentList";

const StudentLists = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '673px',
            borderRadius: '20px',
            background: 'rgba(219, 223, 234, 0.70)',
            overflowY: 'scroll'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mx: '118px',
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: '600',
                marginTop: '24px',
                marginBottom: '14px',
            }}>
                <Typography variant="span">Ad Soyad</Typography>
                <Typography variant="span">Bölüm</Typography>
                <Typography variant="span">GANO</Typography>
                <Typography variant="span">Durum</Typography>
                <Typography variant="span">Mezun Tarihi</Typography>
            </Box>
            <Box sx={{
                mx: '35px',
            }}>
                <StudentList />
                <StudentList />
                <StudentList />
                <StudentList />
                <StudentList />
                <StudentList />
                <StudentList />
                <StudentList />
                <StudentList />
                <StudentList />
                <StudentList />
                <StudentList />
                <StudentList />
            </Box>
        </Box>
    )
}

export default StudentLists;