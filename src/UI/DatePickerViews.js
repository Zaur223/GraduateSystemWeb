import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';

export default function DatePickerViews({ label, onChange }) {
  return (
    <Box marginBottom={'8px'}>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DemoContainer components={['DatePicker']}>
          <Box width={190}>
            <DatePicker 
              label={label || "Mezun Tarihi"} 
              views={['year']} 
              onChange={(value) => onChange && onChange(value ? value.toDate() : null)} 
            />
          </Box>
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}