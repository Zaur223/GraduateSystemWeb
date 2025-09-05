import { Avatar, Box, Typography } from "@mui/material";
import ComboBox from "../UI/ComboBox";
import DummyStudent from "../data/DummyStudent";

const StatisticStudent = () => {
    return (
        <Box sx={{
            mx: '35px',
            mt: '35px'
        }}>
            <Box>
                <ComboBox options={DummyStudent} label={'Öğrenci No'} />
                <Box sx={{
                    width: '406px',
                    height: '308px',
                    background: '#ffffff',
                    borderRadius: '5px',
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: '22px',
                        alignItems: 'center',
                        px: '16px',
                        py: '15px'
                    }}>
                        <Avatar sx={{width: '100px', height: '100px'}} />
                        <Box>
                            <Typography sx={{fontWeight: '700', fontSize: '20px'}}>Zaur Hajizalov</Typography>
                            <Typography sx={{fontSize: '14px'}}>No: 214210029</Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '5px',
                                mt: '5px',
                                width: '80px',
                                height: '32px',
                                fontFamily: 'Roboto',
                                fontSize: '15px',
                                background: '#D9D9D9'
                            }}>Gano: 2.79</Box>
                        </Box>
                    </Box>
                    <hr style={{ height: '5px', background: '#628EFF', border: 'none'}} />
                    <Box sx={{px: '16px', py: '12px'}}>
                        <Typography>Email: zaur.hacizalov96@gmail.com</Typography>
                        <Typography>Okuduğu Bölüm: Bilgisayar mühendisliği</Typography>
                        <Typography>Çalıştığı Yer: ------</Typography>
                        <Typography>Çalıştığı Alan: Frontend</Typography>
                        <Typography>Mezun Tarihi: 15.06.2026</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default StatisticStudent;