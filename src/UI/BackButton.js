import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const BackButton = () => {
    return (
        <Button variant="contained" sx={{
            marginTop: '36px',
            width: '134px', 
            height: '40px',
            backgroundColor: '#ffffff', 
            color: '#345375',
            borderRadius: '9px',
            fontWeight: '700',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                    <path d="M0.439369 9.89055C-0.146456 10.5042 -0.146456 11.5007 0.439369 12.1144L9.43761 21.5398C10.0234 22.1534 10.9748 22.1534 11.5606 21.5398C12.1465 20.9261 12.1465 19.9296 11.5606 19.316L3.62156 11L11.5559 2.68404C12.1418 2.0704 12.1418 1.07386 11.5559 0.460227C10.9701 -0.153409 10.0187 -0.153409 9.43292 0.460227L0.434681 9.88564L0.439369 9.89055Z" fill="#345375"/>
                </svg>
                <span>Geri Dön</span>
            </Box>
        </Button>
    )
}

export default BackButton;