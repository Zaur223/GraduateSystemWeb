import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const getLabel = (option) => {
  if (option == null) return '';
  if (typeof option === 'string') return option;
  return option.label || '';
};

export default function ComboBox({ options, label, onChange }) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      getOptionLabel={(option) => getLabel(option)}
      isOptionEqualToValue={(opt, val) => getLabel(opt) === getLabel(val)}
      onChange={(event, value) => onChange && onChange(getLabel(value))}
      sx={{
        width: 190,
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