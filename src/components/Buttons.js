import { Box, Button } from "@mui/material";
import HomeButton from "../UI/HomeButton.js";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import AddUserModal from './AddUserModal.js';

const Buttons = () => {
    const [open, setOpen] = useState(false);
    const handleCreate = (user) => {
        // TODO: replace with API call or dispatch
        console.log('Create user', user);
    };

    return (
        <>
        <Box display={'flex'} gap={'25px'} flexWrap={{md: 'nowrap', xs: 'wrap' }} justifyContent={{xs: 'center'}} >
            <Link to={'/graduate'} style={{ textDecoration: 'none' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <HomeButton text={'Mezun Öğrenciler'} icon={'images/graduate.svg'} />
            </Link>
            <Link to={'/statistic'} style={{textDecoration: 'none'}} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <HomeButton text={'Mezuniyet İstatistiği'} icon={'images/statistic.svg'} />
            </Link>
            <HomeButton text={'İş Arayanlar'} icon={'images/work.svg'} />
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Kullanıcı Ekle</Button>
        </Box>
        <AddUserModal open={open} onClose={() => setOpen(false)} onCreate={handleCreate} />
        </>
    )
}

export default Buttons;