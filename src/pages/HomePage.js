import Slider from '../modules/Slider'
import Box from "@mui/material/Box"
import Buttons from '../components/Buttons'
import Announcement from '../components/Announcement'

const HomePage = () => {
    return (
        <>
            <Box sx={{p: 5}}>
                <Slider />
                <Box mt={6} display={'flex'} gap={3} flexDirection={{lg: 'row', xs: 'column'}} alignItems={{md: 'flex-start', xs: 'center'}}>
                    <Buttons />
                    <Announcement />
                </Box>
            </Box>
        </>
    )
}

export default HomePage