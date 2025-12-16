import { Box } from "@mui/material";
import Filter from "../components/Filter.js";
import StudentLists from "../components/StudentLists.js";
import BackButton from "../UI/BackButton.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const GraduatePage = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:5000/users');
                const data = await response.json();
                const studentUsers = data.filter(user => user.role === 'student');
                setStudents(studentUsers);
                setFilteredStudents(studentUsers);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };
        fetchStudents();
    }, []);

    const handleFilter = (filters) => {
        let filtered = students;
        if (filters.name) {
            filtered = filtered.filter(student => 
                `${student.firstName} ${student.lastName}`.toLowerCase().includes(filters.name.toLowerCase())
            );
        }
        if (filters.faculty) {
            filtered = filtered.filter(student => student.faculty === filters.faculty);
        }
        if (filters.department) {
            filtered = filtered.filter(student => student.department === filters.department);
        }
        if (filters.gpa) {
            filtered = filtered.filter(student => student.gpa >= parseFloat(filters.gpa));
        }
        if (filters.graduationDate) {
            const filterYear = filters.graduationDate.getFullYear();
            filtered = filtered.filter(student => 
                new Date(student.graduationDate).getFullYear() === filterYear
            );
        }
        setFilteredStudents(filtered);
    };

    return (
        <>
            <Link to={'..'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><BackButton /></Link>
            <Box sx={{pt: 3, display: 'flex', gap: '12px'}}>
                <Filter students={students} onFilter={handleFilter} />
                <StudentLists students={filteredStudents} />
            </Box>
        </>
    )
}

export default GraduatePage;