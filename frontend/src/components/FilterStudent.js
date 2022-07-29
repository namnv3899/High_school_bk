import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

function classNames(){
    var cls = []
    for(var i = 1; i <= 12; i++) cls.push("A"+i);
    return cls;
}
export default function FilterStudent(props) {
  return (
    <Box sx={{ minWidth: 200, display: "flex", gap: "20px"}}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Khối
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'grade',
            id: 'uncontrolled-native',
          }}
          onChange={(e) => {props.SetGradeFilter(e.target.value)}}
        >
          <option value=""></option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </NativeSelect>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Lớp
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'class',
            id: 'uncontrolled-native',
          }}
          onChange={(e) => {props.SetClassFilter(e.target.value)}}
        >
            <option value = "" key="All"></option>
         {classNames().map((item, index) => {
            return <option value = {item} key={index}>{item}</option>
         })}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
