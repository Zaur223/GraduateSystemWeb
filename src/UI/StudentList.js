import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const StudentList = (props) => {
    return (
        <Accordion sx={{marginBottom: '7px'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Box sx={{
                    display: 'flex', 
                    color: '#5F5F5F',
                    width: '100%',
                }}>
                    <Box sx={{display: 'flex', alignItems: 'center', width: '100%', mx: '25px'}}>
                        <Avatar sx={{width: '30px', height: '30px', mr: '25px'}} />
                        <Box sx={{display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'space-between'}}>
                            <Typography variant='span' sx={{fontSize: '14px', width: '120px'}}>{props.student?.firstName} {props.student?.lastName}</Typography>
                            <Typography variant='span' sx={{fontSize: '14px', width: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{props.student?.department}</Typography>
                            <Typography variant='span' sx={{fontSize: '14px', width: '60px'}}>{props.student?.gpa}</Typography>
                            <Typography variant='span' sx={{fontSize: '14px', width: '60px'}}>Mezun</Typography>
                            <Typography variant='span' sx={{fontSize: '14px', width: '100px'}}>{props.student?.graduationDate ? new Date(props.student.graduationDate).toLocaleDateString('tr-TR') : 'N/A'}</Typography>
                        </Box>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#fafafaff' }}>
                <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        }}>
                    <Box sx={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '14px', 
                        height: '128px',
                        fontFamily: 'Roboto',
                        }}
                    >
                        <Typography variant='span'>Email: {props.student?.email}</Typography>
                        <Typography variant='span'>Fakülte: {props.student?.faculty}</Typography>
                        <Typography variant='span'>Bölüm: {props.student?.department}</Typography>
                        <Typography variant='span'>GANO: {props.student?.gpa}</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        <Link to={'/message'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Button variant="contained" sx={{backgroundColor: '#69A2E3'}}>Mesaj Yaz</Button></Link>
                        <Link to={`/profile/${props.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Button variant="contained" sx={{backgroundColor: '#69A2E3', width: '110px'}}>Profili</Button></Link>
                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default StudentList;