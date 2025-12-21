import { Box } from "@mui/material";
import Filter from "../components/Filter.js";
import StudentLists from "../components/StudentLists.js";
import BackButton from "../UI/BackButton.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from 'react-redux';


const GraduatePage = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.user.user);
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        if (currentUser && currentUser.role === 'student') {
            navigate(`/profile/${currentUser._id}`);
        }
    }, [currentUser, navigate]);

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

    const handleFilter = useCallback((filters) => {
        const nameVal = filters.name?.toString().trim().toLowerCase();
        const facultyVal = filters.faculty?.toString().trim().toLowerCase();
        const deptVal = filters.department?.toString().trim().toLowerCase();
        let filtered = students;
        if (nameVal) {
            filtered = filtered.filter(student => 
                `${student.firstName || ''} ${student.lastName || ''}`
                    .trim()
                    .toLowerCase()
                    .includes(nameVal)
            );
        }
        if (facultyVal) {
            filtered = filtered.filter(student => 
                (student.faculty || '').toString().trim().toLowerCase() === facultyVal
            );
        }
        if (deptVal) {
            filtered = filtered.filter(student => 
                (student.department || '').toString().trim().toLowerCase() === deptVal
            );
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
    }, [students]);

    return (
        <>
            <BackButton fallback="/" />
            <Box sx={{pt: 3, display: 'flex', gap: '12px'}}>
                <Filter students={students} onFilter={handleFilter} />
                <StudentLists students={filteredStudents} />
            </Box>
        </>
    )
}

export default GraduatePage;