import { Box, Link} from "@mui/material";

const AuthPage = () => {
    const inputStyle = {
        width: '300px',
        height: '40px',
        borderRadius: '4px',
        padding: '7px',
        outline: 'none',
        border: 'none'
    }

    return  (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <Box sx={{
                    width: '450px',
                    height: '547px',
                    borderRadius: '20px',
                    background: '#C1C6D4',
                    padding: '45px 88px 57px 88px',

                }}>
                    <img style={{display: "block", margin: '0 auto'}} src="./main_logo.svg" alt="/" />
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '60px'
                    }}>
                        <Box component="form" sx={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                            <Box>
                                <Box component="label" sx={{display: 'block', mb: 0.5, fontFamily: 'Roboto'}}>Email</Box>
                                <input style={inputStyle} type='text' name='No' required />
                            </Box>

                            <Box>
                                <Box component="label" sx={{display: 'block', mb: 0.5, fontFamily: 'Roboto'}}>Şifre</Box>
                                <input style={inputStyle} type='password' name='password' required />
                            </Box>

                            <button style={{
                                width: '116px',
                                height: '34px',
                                border: 'none',
                                cursor: 'pointer',
                                borderRadius: '5px',
                                marginTop: '30px'
                            }} type='submit'>Giriş yap</button>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: "center", flexDirection: "column", marginTop: '30px'}}>
                        <Link href="#">Giriş yapamıyor musunuz?</Link>

                        <Box sx={{display: "flex", gap: "20px", marginTop: '40px'}}>
                            <Link href="#"><img src="./images/instagram.svg" alt="" /></Link>
                            <Link href="#"><img src="./images/facebook.svg" alt="" /></Link>
                            <Link href="#"><img src="./images/X.svg" alt="" /></Link>
                            <Link href="#"><img src="./images/youtube.svg" alt="" /></Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default AuthPage;