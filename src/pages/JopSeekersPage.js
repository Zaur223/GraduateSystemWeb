import { Box } from "@mui/material";
import Filter from "../components/Filter.js";
import StudentLists from "../components/StudentLists.js";
import BackButton from "../UI/BackButton.js";
import { useCallback, useEffect, useState } from "react";

const JobSeekersPage = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        const fetchJobSeekers = async () => {
            try {
                const res = await fetch('http://localhost:5000/users/job-seekers');
                if (res.ok) {
                    const data = await res.json();
                    setStudents(data || []);
                    setFilteredStudents(data || []);
                }
            } catch (err) {
                console.error('Job seekers yüklenemedi', err);
            }
        };
        fetchJobSeekers();
    }, []);

    const handleFilter = useCallback((filters) => {
        const { name, faculty, department, gpa, graduationDate } = filters;
        const nameVal = name?.toString().trim().toLowerCase();
        const facultyVal = faculty?.toString().trim().toLowerCase();
        const deptVal = department?.toString().trim().toLowerCase();
        const targetYear = graduationDate ? new Date(graduationDate).getFullYear() : null;
        const next = students.filter(s => {
            const fullName = `${s.firstName || ''} ${s.lastName || ''}`.trim().toLowerCase();
            const nameOk = nameVal ? fullName.includes(nameVal) : true;
            const facultyOk = facultyVal ? (s.faculty || '').toString().trim().toLowerCase() === facultyVal : true;
            const deptOk = deptVal ? (s.department || '').toString().trim().toLowerCase() === deptVal : true;
            const gpaOk = gpa !== '' && gpa !== null && gpa !== undefined ? Number(s.gpa) === Number(gpa) : true;
            const gradOk = targetYear ? (s.graduationDate ? new Date(s.graduationDate).getFullYear() === targetYear : false) : true;
            return nameOk && facultyOk && deptOk && gpaOk && gradOk;
        });
        setFilteredStudents(next);
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

export default JobSeekersPage;