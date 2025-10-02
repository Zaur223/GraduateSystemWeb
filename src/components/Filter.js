import { Box } from "@mui/material";
import ComboBox from "../UI/ComboBox.js";
import DummyStudent from "../data/DummyStudent.js";
import DummyFaculty from "../data/DummyFaculty.js";
import DummySection from "../data/DummySection.js";
import DatePickerViews from "../UI/DatePickerViews.js";
import DummyGANO from "../data/DummyGANO.js";

const Filter = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: '262px', 
            borderRadius: '10px',
            background: 'rgba(219, 223, 234, 0.70)',
            paddingTop: '47px',
            }}>
                <ComboBox options={DummyStudent} label={'Öğrenci İsmi'} />
                <ComboBox options={DummyFaculty} label={'Fakülte'} />
                <ComboBox options={DummySection} label={'Bölüm'} />
                <ComboBox options={DummyGANO} label={'GANO'} /> 
                <DatePickerViews label={'Mezuniyet Tarihi'} />       
        </Box>
    )
}

export default Filter;