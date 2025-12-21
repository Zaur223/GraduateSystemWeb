import { Avatar, Box, Typography, TextField, Button } from "@mui/material";
import StudentGpaChart from "../modules/StudentGpaChart.js";
import { useState } from "react";

const StatisticStudent = () => {
  const [studentNo, setStudentNo] = useState('');
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!studentNo.trim()) {
      setError('Lütfen öğrenci numarası girin');
      setStudent(null);
      return;
    }

    setLoading(true);
    setError('');
    try {
      const res = await fetch(`http://localhost:5000/search/student-by-no/${studentNo}`);
      if (res.ok) {
        const data = await res.json();
        setStudent(data);
      } else {
        setError('Öğrenci bulunamadı');
        setStudent(null);
      }
    } catch (err) {
      console.error('Arama hatası:', err);
      setError('Bir hata oluştu');
      setStudent(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box sx={{ mx: '35px', mt: '35px' }}>
      <Box sx={{ display: 'flex', gap: '10px', mb: '20px' }}>
        <TextField
          label="Öğrenci No"
          value={studentNo}
          onChange={(e) => setStudentNo(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Öğrenci numarasını girin"
          sx={{ width: '250px' }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          disabled={loading}
          sx={{ backgroundColor: '#628EFF' }}
        >
          {loading ? 'Aranıyor...' : 'Ara'}
        </Button>
      </Box>

      {error && (
        <Typography sx={{ color: 'red', mb: '20px' }}>{error}</Typography>
      )}

      {student && (
        <Box sx={{ display: 'flex', gap: '30px', mt: '20px' }}>
          {/* SOL KART */}
          <Box sx={{
            width: '406px',
            height: '308px',
            background: '#ffffff',
            borderRadius: '5px',
          }}>
            <Box sx={{
              display: 'flex',
              gap: '22px',
              alignItems: 'center',
              px: '16px',
              py: '15px'
            }}>
              <Avatar sx={{ width: '100px', height: '100px' }} />
              <Box>
                <Typography sx={{ fontWeight: '700', fontSize: '20px' }}>
                  {student.firstName} {student.lastName}
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  No: {student.studentNo}
                </Typography>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '5px',
                  mt: '5px',
                  width: '80px',
                  height: '32px',
                  fontSize: '15px',
                  background: '#D9D9D9'
                }}>
                  Gano: {student.gpa}
                </Box>
              </Box>
            </Box>

            <hr style={{ height: '5px', background: '#628EFF', border: 'none' }} />

            <Box sx={{ px: '16px', py: '12px' }}>
              <Typography>Email: {student.email}</Typography>
              <Typography>Okuduğu Bölüm: {student.department}</Typography>
              <Typography>Fakülte: {student.faculty}</Typography>
              <Typography>Çalıştığı Alan: {student.skills?.join(', ') || '------'}</Typography>
              <Typography>Mezun Tarihi: {student.graduationDate ? new Date(student.graduationDate).toLocaleDateString('tr-TR') : '------'}</Typography>
            </Box>
          </Box>

          <StudentGpaChart studentNo={student.studentNo} />
        </Box>
      )}
    </Box>
  );
};

export default StatisticStudent;
