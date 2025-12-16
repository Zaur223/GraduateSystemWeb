import { Box } from "@mui/material";
import ComboBox from "../UI/ComboBox.js";
import { useState, useEffect } from "react";
import DummyFaculty from "../data/DummyFaculty.js";
import DummySection from "../data/DummySection.js";
import DatePickerViews from "../UI/DatePickerViews.js";
import DummyGANO from "../data/DummyGANO.js";

const Filter = ({ students, onFilter }) => {
    const [filters, setFilters] = useState({
        name: '',
        faculty: '',
        department: '',
        gpa: '',
        graduationDate: null
    });

    const studentOptions = students.map(student => ({
        label: `${student.firstName} ${student.lastName}`
    }));

    useEffect(() => {
        onFilter(filters);
    }, [filters, onFilter]);

    const handleNameChange = (value) => {
        setFilters(prev => ({ ...prev, name: value }));
    };

    const handleFacultyChange = (value) => {
        setFilters(prev => ({ ...prev, faculty: value?.label || '' }));
    };

    const handleDepartmentChange = (value) => {
        setFilters(prev => ({ ...prev, department: value?.label || '' }));
    };

    const handleGpaChange = (value) => {
        const gpaValue = value ? parseFloat(value.split(' ')[0]) : '';
        setFilters(prev => ({ ...prev, gpa: gpaValue }));
    };

    const handleDateChange = (value) => {
        setFilters(prev => ({ ...prev, graduationDate: value }));
    };

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
                <ComboBox options={studentOptions} label={'Öğrenci İsmi'} onChange={handleNameChange} />
                <ComboBox options={DummyFaculty} label={'Fakülte'} onChange={handleFacultyChange} />
                <ComboBox options={DummySection} label={'Bölüm'} onChange={handleDepartmentChange} />
                <ComboBox options={DummyGANO} label={'GANO'} onChange={handleGpaChange} /> 
                <DatePickerViews label={'Mezuniyet Tarihi'} onChange={handleDateChange} />       
        </Box>
    )
}

export default Filter;