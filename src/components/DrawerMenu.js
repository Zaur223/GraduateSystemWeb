import { Drawer, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDrawerMenu } from '../modules/Drawer_module.js';
import HomeButton from "../UI/HomeButton.js";


const DrawerMenu = () => {
    const { isOpen, toggleMenuHandler } = useDrawerMenu();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    const isTeacher = user?.role === 'teacher';

    const handleNav = (path, requireTeacher = false) => {
        if (requireTeacher && !isTeacher) {
            alert('Bu alanı sadece öğretmen rolü görebilir');
            return;
        }
        toggleMenuHandler();
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Drawer open={isOpen} onClose={toggleMenuHandler}>
            <Box sx={{
                display: 'flex', 
                alignItems: 'center', 
                flexDirection: 'column', 
                gap: '15px', 
                width: '350px', 
                paddingTop: '30px'}}>
                <HomeButton 
                    flexDirection="row"
                    justifyContent='flex-start'
                    px='20px'
                    text="Mezun Öğrenciler" 
                    icon="images/graduate.svg" 
                    width="290px" 
                    height="60px"
                    onClick={() => handleNav('/graduate')}
                />
                <HomeButton 
                    flexDirection="row" 
                    justifyContent='flex-start'
                    px='20px'
                    text="Mezuniyet İstatistiği" 
                    icon="images/statistic.svg" 
                    width="290px" 
                    height="60px"
                    onClick={() => handleNav('/statistic', true)}
                />
                <HomeButton 
                    flexDirection="row"
                    justifyContent='flex-start'
                    px='20px'
                    text="İş Arayanlar" 
                    icon="images/work.svg" 
                    width="290px" 
                    height="60px"
                    onClick={() => handleNav('/job-seekers', true)}
                />
            </Box>
        </Drawer>
    )
}

export default DrawerMenu;