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
          // Lấy ra danh sách tất cả các học sinh
          var _students = res.data.data[0];
          for(var i = 0; i < _students.length; i++){
            _students[i]["Toán học"] = "";
            _students[i]["Ngữ văn"] = ""
            _students[i]["Ngoại ngữ"] = ""
            _students[i]["Vật lý"] = ""
            _students[i]["Hóa học"] = ""
            _students[i]["Sinh học"] = ""
            _students[i]["Tin học"] = ""
            _students[i]["Lịch sử"] = ""
            _students[i]["Địa lý"] = "";
            _students[i]["GDCD"] = "";
            _students[i]["Công nghệ"] = ""
          }
          // Lấy ra danh sách điểm của môn học của lớp
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
            <StyledTableCell align="center">Họ và tên</StyledTableCell>
            <StyledTableCell align="center">Ngày sinh</StyledTableCell>
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
              <StyledTableCell align="center">{row["Toán học"]}</StyledTableCell>
              <StyledTableCell align="center">{row['Vật lý']}</StyledTableCell>
              <StyledTableCell align="center">{row['Hóa học']}</StyledTableCell>
              <StyledTableCell align="center">{row["Sinh học"]}</StyledTableCell>
              <StyledTableCell align="center">{row["Tin học"]}</StyledTableCell>
              <StyledTableCell align="center">{row["Ngữ văn"]}</StyledTableCell>
              <StyledTableCell align="center">{row["Lịch sử"]}</StyledTableCell>
              <StyledTableCell align="center">{row["Địa lý"]}</StyledTableCell>
              <StyledTableCell align="center">{row["Ngoại ngữ"]}</StyledTableCell>
              <StyledTableCell align="center">{row['GDCD']}</StyledTableCell>
              <StyledTableCell align="center">{row['Công nghệ']}</StyledTableCell>
              {/* <StyledTableCell align="center">{row.avg}</StyledTableCell> */}
              <StyledTableCell align="right">{ Math.round((
                parseFloat(row["Toán học"] === "" ? 0 : row["Toán học"]) + 
                parseFloat(row["Vật lý"] === "" ? 0 : row["Vật lý"]) + 
                parseFloat(row["Hóa học"] === "" ? 0 : row["Hóa học"]) + 
                parseFloat(row["Sinh học"] === "" ? 0 : row["Sinh học"]) + 
                parseFloat(row["Tin học"] === "" ? 0 : row["Tin học"]) +
                parseFloat(row["Ngữ văn"] === "" ? 0 : row["Ngữ văn"]) + 
                parseFloat(row["Lịch sử"] === "" ? 0 : row["Lịch sử"]) + 
                parseFloat(row["Địa lý"] === "" ? 0 : row["Địa lý"]) + 
                parseFloat(row["Ngoại ngữ"] === "" ? 0 : row["Ngoại ngữ"]) + 
                parseFloat(row["GDCD"] === "" ? 0 : row["GDCD"]) + 
                parseFloat(row["Công nghệ"] === "" ? 0 : row["Công nghệ"])
                )/11 * 100)/100
              }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}