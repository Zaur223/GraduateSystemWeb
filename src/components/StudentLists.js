import { Box } from "@mui/material";
import StudentList from "../UI/StudentList.js";
import DummyStudent from "../data/DummyStudent.js";

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
                <Box component="span">Ad Soyad</Box>
                <Box component="span">Bölüm</Box>
                <Box component="span">GANO</Box>
                <Box component="span">Durum</Box>
                <Box component="span">Mezun Tarihi</Box>
            </Box>
            <Box sx={{mx: '35px'}}>
                {DummyStudent.map((student, idx) => (
                    <StudentList key={idx} student={student} id={idx} />
                ))}
            </Box>
        </Box>
    )
}

export default StudentLists;