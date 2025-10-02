import Slider from '../modules/Slider.js'
import Box from "@mui/material/Box"
import Buttons from '../components/Buttons.js'
import Announcement from '../components/Announcement.js'

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