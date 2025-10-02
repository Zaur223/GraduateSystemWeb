import { Drawer, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useDrawerMenu } from '../modules/Drawer_module.js';
import HomeButton from "../UI/HomeButton.js";


const DrawerMenu = () => {
    const {toggleMenuHandler} = useDrawerMenu();
    const { isOpen } = useDrawerMenu();



    return (
        <Drawer open={isOpen} onClose={toggleMenuHandler}>
            <Box sx={{
                display: 'flex', 
                alignItems: 'center', 
                flexDirection: 'column', 
                gap: '15px', 
                width: '350px', 
                paddingTop: '30px'}}>
                <Link 
                    to={'/graduate'} 
                    style={{ textDecoration: 'none' }} 
                    onClick={(e) => {
                        toggleMenuHandler();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <HomeButton 
                        flexDirection="row"
                        justifyContent='flex-start'
                        px='20px'
                        text="Mezun Öğrenciler" 
                        icon="images/graduate.svg" 
                        width="290px" 
                        height="60px"
                    />
                </Link>
                <HomeButton 
                    flexDirection="row" 
                    justifyContent='flex-start'
                    px='20px'
                    text="Mezuniyet İstatistiği" 
                    icon="images/statistic.svg" 
                    width="290px" 
                    height="60px"
                />
                <HomeButton 
                    flexDirection="row"
                    justifyContent='flex-start'
                    px='20px'
                    text="İş Arayanlar" 
                    icon="images/work.svg" 
                    width="290px" 
                    height="60px"
                />
            </Box>
        </Drawer>
    )
}

export default DrawerMenu;