import { Drawer, Box } from "@mui/material";
import HomeButton from '../UI/HomeButton';
import { useState } from "react";


const DrawerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen()
    }

    return (
        <Drawer open={isOpen}>
            <Box sx={{width: '350px'}}>
                <HomeButton />
            </Box>
        </Drawer>
    )
}

export default DrawerMenu;