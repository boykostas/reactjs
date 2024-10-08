import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Конвертация Цельсия в Фаренгейты
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      setFahrenheit((value * 9/5 + 32).toFixed(2));
    }
  };

  // Конвертация Фаренгейтов в Цельсии
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      setCelsius(((value - 32) * 5/9).toFixed(2));
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, margin: 'auto', padding: '20px' }}>
      <TextField
        label="Цельсия"
        variant="outlined"
        value={celsius}
        onChange={handleCelsiusChange}
        type="number"
        fullWidth
      />
      <TextField
        label="Фаренгейта"
        variant="outlined"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        type="number"
        fullWidth
      />
      <Button variant="contained" onClick={() => { setCelsius(''); setFahrenheit(''); }}>
        Очистить
      </Button>
    </Box>
  );
}

export default TemperatureConverter;
