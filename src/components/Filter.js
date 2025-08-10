import { Box } from "@mui/material";
import ComboBox from "../UI/ComboBox";
import DummyStudent from "../data/DummyStudent";
import DummyFaculty from "../data/DummyFaculty";
import DummySection from "../data/DummySection";
import DatePickerViews from "../UI/DatePickerViews";
import DummyGANO from "../data/DummyGANO";

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