import * as React from 'react';
// import { Button, TextField } from '@mui/material';
import { Button, TextField } from '@material-ui/core';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function ProductDetail() {
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        size="large"
        sx={{
          height: "42px",
          width: "93px",
          borderRadius: "4px",
          padding: "1px",
        }}
      >CANCE</Button>
      <Button
        variant="contained"
        size="large"
        sx={{
          height: "42px",
          width: "93px",
          borderRadius: "4px",
          padding: "1px",
        }}
      >SAVE</Button>

      <TextField
        id="outlined-helperText"
        label="Product Name"
        defaultValue="value"
        helperText=""
        sx={{
          boxSizing: 'border-box',
          marginTop: 2,
          width: 188,
        }}
      />

      <TextField
        id="outlined-helperText"
        multiline
        label="Description"
        defaultValue="value"
        helperText=""
        sx={{
          marginTop: 2,
          height: 125
        }}
      />
      
    </React.Fragment>
  );
}