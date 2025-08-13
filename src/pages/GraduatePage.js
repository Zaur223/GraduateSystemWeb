import { Box } from "@mui/material";
import Filter from "../components/Filter";
import StudentLists from "../components/StudentLists";
import BackButton from "../UI/BackButton";
import { Link } from "react-router-dom";

const GraduatePage = () => {
    return (
        <>
            <Link to={'..'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><BackButton /></Link>
            <Box sx={{pt: 3, display: 'flex', gap: '12px'}}>
                <Filter />
                <StudentLists />
            </Box>
        </>
    )
}

export default GraduatePage;