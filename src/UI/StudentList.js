import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const StudentList = () => {
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
                    <Avatar sx={{width: '30px', height: '30px'}} />
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '75px', width: '100%', mx: '25px'}}>
                        <Typography variant='span' sx={{marginLeft: '10px', fontSize: '14px', minWidth: '60px'}}>Zaur Hajizalov</Typography>
                        <Typography variant='span' sx={{fontSize: '14px',maxWidth: '100px'}}>Bilgisayar Mühendiliği</Typography>
                        <Typography variant='span' sx={{fontSize: '14px', minWidth: '60px'}}>2.79</Typography>
                        <Typography variant='span' sx={{fontSize: '14px', minWidth: '60px'}}>Mezun</Typography>
                        <Typography variant='span' sx={{fontSize: '14px', minWidth: '60px'}}>15.06.2026</Typography>
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
                        <Typography variant='span'>Öğrenci NO: 214210029</Typography>
                        <Typography variant='span'>Email: zaur.hacizalov96@gmail.com</Typography>
                        <Typography variant='span'>Telefon: +90 543 258 20 55</Typography>
                        <Typography variant='span'>Çalıştığı Yer: ------</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        <Link to={'/message'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Button variant="contained" sx={{backgroundColor: '#69A2E3'}}>Mesaj Yaz</Button></Link>
                        <Link to={'/profile'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Button variant="contained" sx={{backgroundColor: '#69A2E3', width: '110px'}}>Profili</Button></Link>
                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default StudentList;