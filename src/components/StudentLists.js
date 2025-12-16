import { Box } from "@mui/material";
import StudentList from "../UI/StudentList.js";

const StudentLists = ({ students }) => {
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
                alignItems: 'center',
                mx: '35px',
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: '600',
                marginTop: '24px',
                marginBottom: '14px',
            }}>
                <Box sx={{width: '55px'}}></Box>
                <Box sx={{display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'space-between'}}>
                    <Box component="span" sx={{width: '120px'}}>Ad Soyad</Box>
                    <Box component="span" sx={{width: '100px'}}>Bölüm</Box>
                    <Box component="span" sx={{width: '60px'}}>GANO</Box>
                    <Box component="span" sx={{width: '60px'}}>Durum</Box>
                    <Box component="span" sx={{width: '100px'}}>Mezun Tarihi</Box>
                </Box>
            </Box>
            <Box sx={{mx: '35px'}}>
                {students.map((student, idx) => (
                    <StudentList key={idx} student={student} id={student._id} />
                ))}
            </Box>
        </Box>
    )
}

export default StudentLists;