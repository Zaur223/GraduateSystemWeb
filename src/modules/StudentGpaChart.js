import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const StudentGpaChart = ({ studentNo: propStudentNo }) => {
  const currentUser = useSelector((state) => state.user.user);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback dummy data
  const dummyData = [
    { term: '2024 Güz', gpa: 2.85 },
    { term: '2024 Bahar', gpa: 3.10 },
    { term: '2025 Güz', gpa: 3.30 },
    { term: '2025 Bahar', gpa: 3.45 },
  ];

  useEffect(() => {
    const studentNo = propStudentNo || currentUser?.studentNo;
    if (!studentNo) {
      setData(dummyData);
      setLoading(false);
      return;
    }

    const fetchStudentTerms = async () => {
      try {
        const res = await fetch(`http://localhost:5000/student-terms/${studentNo}`);
        if (res.ok) {
          const terms = await res.json();
          if (terms.length > 0) {
            // Format data for chart
            const chartData = terms.map(term => ({
              term: `${term.year} ${term.term}`,
              gpa: term.gpa
            }));
            setData(chartData);
          } else {
            // No terms found, use dummy data
            setData(dummyData);
          }
        } else {
          setData(dummyData);
        }
      } catch (err) {
        console.error('Dönem verileri yüklenemedi', err);
        setData(dummyData);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentTerms();
  }, [propStudentNo, currentUser?.studentNo]);

  if (loading) {
    return <Box sx={{ p: 2 }}>Yükleniyor...</Box>;
  }

  return (
    <>
      
      <Box sx={{
        width: '600px',
        height: '350px',
        background: '#fff',
        borderRadius: '5px',
        p: 2
      }}>
        <Typography sx={{ fontSize: '20px', fontWeight: '700', mb: 2 }}>Tarihsel Transkript</Typography>
        <BarChart
          xAxis={[
            {
              data: data.map(item => item.term),
              scaleType: 'band',
            },
          ]}
          series={[
            {
              data: data.map(item => item.gpa),
              label: 'Dönem Ortalaması',
              color: '#628EFF',
            },
          ]}
          height={260}
        />
      </Box>
    </>
  );
};

export default StudentGpaChart;
