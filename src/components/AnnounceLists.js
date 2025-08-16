import AnnounceList from "../UI/AnnounceList";
import { Box } from "@mui/material";

const AnnounceLists = () => {
    return (
        <ul sx={{
            listStyleType: 'none',
            paddingTop: '20px'
        }}>
            <AnnounceList />
            <Box sx={{display: 'flex', justifyContent: 'flex-end', px: '30px', marginTop: '10px'}}>
                <a href="/" style={{display: 'flex', alignItems: 'center', gap: '7px'}}>
                    <span style={{
                        color: '#345375', 
                        textDecorationLine: 'underline',
                        cursor: 'pointer',
                        fontWeight: '700',
                        fontSize: '15px',
                    }}>Daha Fazla</span>
                    <img src="images/arrowRight.svg" alt="" />
                </a>
            </Box>
        </ul>
    )
}

export default AnnounceLists;