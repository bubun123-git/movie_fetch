
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Filter = ({ options, selectedOption, setSelectedOption }) => {
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }}>
    <InputLabel id="filter-label" sx={{ color: 'white' }}><b>Filter by</b></InputLabel>
    <Select
      labelId="filter-label"
      id="filter-select"
      value={selectedOption}
      onChange={handleChange}
      label="Filter by"
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  );
};

export default Filter;
