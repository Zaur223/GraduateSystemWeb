import { Box } from "@mui/material";
import Filter from "../components/Filter";
import StudentLists from "../components/StudentLists";

const GraduatePage = () => {
    return (
        <Box sx={{pt: 5, display: 'flex', gap: '12px'}}>
            <Filter />
            <StudentLists />
        </Box>
    )
}

export default GraduatePage;