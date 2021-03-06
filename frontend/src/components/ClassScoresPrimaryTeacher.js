import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ClassScore} from "../mock/class-score"
import { useState, useEffect } from 'react';
import axios from 'axios';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ClassScoresPrimaryTeacher() {
  const [rows, setRows] = React.useState([ClassScore]);
  useEffect( () => {
    let _info;
    axios({
      method : 'get',
      url : "http://localhost:6969/api/teacher",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      }
    }).then((res) => 
    {
      _info = res.data.data.data.filter( item => item.username === JSON.parse(localStorage.getItem('user')).username)[0];
      axios({
        method : 'get',
        url : "http://localhost:6969/api/class/classPrimaryOfTeacher/"+_info.id,
        headers : {
          "Authorization" : localStorage.getItem("token"),
        }
      }).then((response) => 
      {
        let _class = response.data.data
        axios({
          method : 'get',
          url : "http://localhost:6969/api/student/" + _class.id,
          headers : {
            "Authorization" : localStorage.getItem("token"),
          }
        }).then((res) => {
          console.log("list student response: ",res.data.data);
          // L???y ra danh s??ch t???t c??? c??c h???c sinh
          var _students = res.data.data[0];
          for(var i = 0; i < _students.length; i++){
            _students[i]["To??n h???c"] = "";
            _students[i]["Ng??? v??n"] = ""
            _students[i]["Ngo???i ng???"] = ""
            _students[i]["V???t l??"] = ""
            _students[i]["H??a h???c"] = ""
            _students[i]["Sinh h???c"] = ""
            _students[i]["Tin h???c"] = ""
            _students[i]["L???ch s???"] = ""
            _students[i]["?????a l??"] = "";
            _students[i]["GDCD"] = "";
            _students[i]["C??ng ngh???"] = ""
          }
          // L???y ra danh s??ch ??i???m c???a m??n h???c c???a l???p
          axios({
            method : 'get',
            url : "http://localhost:6969/api/score/listScoreOfClassOfTeacherPrimary?classId="+_class.id+"&subject=chuNhiem",
            headers : {
              "Authorization" : localStorage.getItem("token"),
            }
          }).then((avgResponse) => {
            let _scores = avgResponse.data.data;
            console.log("Score: ", _scores);
            for(var i = 0; i < _scores.length; i++){
              for(var j = 0; j < _students.length; j++){
                if(_students[j].id == _scores[i].student.id){
                  _students[j][_scores[i].subject] = _scores[i].averageScore;
                }
              }
            };
            console.log("List students: ", _students);
            setRows(_students);
          })});
      }
      )
    }
    )
    }
  , []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>STT</StyledTableCell>
            <StyledTableCell align="center">H??? v?? t??n</StyledTableCell>
            <StyledTableCell align="center">Ng??y sinh</StyledTableCell>
            <StyledTableCell align="center">TO</StyledTableCell>
            <StyledTableCell align="center">LI</StyledTableCell>
            <StyledTableCell align="center">HO</StyledTableCell>
            <StyledTableCell align="center">SI</StyledTableCell>
            <StyledTableCell align="center">TI</StyledTableCell>
            <StyledTableCell align="center">VA</StyledTableCell>
            <StyledTableCell align="center">SU</StyledTableCell>
            <StyledTableCell align="center">DI</StyledTableCell>
            <StyledTableCell align="center">NN</StyledTableCell>
            <StyledTableCell align="center">GD</StyledTableCell>
            <StyledTableCell align="center">CN</StyledTableCell>
            <StyledTableCell align="center">TB</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center">{index}</StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.dateOfBirth}</StyledTableCell>
              <StyledTableCell align="center">{row["To??n h???c"]}</StyledTableCell>
              <StyledTableCell align="center">{row['V???t l??']}</StyledTableCell>
              <StyledTableCell align="center">{row['H??a h???c']}</StyledTableCell>
              <StyledTableCell align="center">{row["Sinh h???c"]}</StyledTableCell>
              <StyledTableCell align="center">{row["Tin h???c"]}</StyledTableCell>
              <StyledTableCell align="center">{row["Ng??? v??n"]}</StyledTableCell>
              <StyledTableCell align="center">{row["L???ch s???"]}</StyledTableCell>
              <StyledTableCell align="center">{row["?????a l??"]}</StyledTableCell>
              <StyledTableCell align="center">{row["Ngo???i ng???"]}</StyledTableCell>
              <StyledTableCell align="center">{row['GDCD']}</StyledTableCell>
              <StyledTableCell align="center">{row['C??ng ngh???']}</StyledTableCell>
              {/* <StyledTableCell align="center">{row.avg}</StyledTableCell> */}
              <StyledTableCell align="right">{ Math.round((
                parseFloat(row["To??n h???c"] === "" ? 0 : row["To??n h???c"]) + 
                parseFloat(row["V???t l??"] === "" ? 0 : row["V???t l??"]) + 
                parseFloat(row["H??a h???c"] === "" ? 0 : row["H??a h???c"]) + 
                parseFloat(row["Sinh h???c"] === "" ? 0 : row["Sinh h???c"]) + 
                parseFloat(row["Tin h???c"] === "" ? 0 : row["Tin h???c"]) +
                parseFloat(row["Ng??? v??n"] === "" ? 0 : row["Ng??? v??n"]) + 
                parseFloat(row["L???ch s???"] === "" ? 0 : row["L???ch s???"]) + 
                parseFloat(row["?????a l??"] === "" ? 0 : row["?????a l??"]) + 
                parseFloat(row["Ngo???i ng???"] === "" ? 0 : row["Ngo???i ng???"]) + 
                parseFloat(row["GDCD"] === "" ? 0 : row["GDCD"]) + 
                parseFloat(row["C??ng ngh???"] === "" ? 0 : row["C??ng ngh???"])
                )/11 * 100)/100
              }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}