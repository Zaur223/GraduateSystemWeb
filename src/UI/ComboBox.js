import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({options, label}) {
  return (
    <Autocomplete
        disablePortal
        options={options}
        sx={{ width: 190,
          marginBottom: '8px',
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#ffffff',
            '& fieldset': {
                border: 'none',
            },
        },
        }}
      renderInput={(params) => <TextField {...params} label={label} />}
      
    />
  );
}