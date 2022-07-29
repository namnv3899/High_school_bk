import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {StudentScores} from "../mock/student-score";
import axios from "axios"
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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


export default function StudentScoreTable() {
  const [rows, setRows] = React.useState([]);
  React.useEffect(()=>{
    axios({
      method : 'get',
      url : "http://localhost:6969/api/student",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      }
    }).then((res) => {
        var _info = res.data.data.data.filter( item => item.username === JSON.parse(localStorage.getItem('user') ).username)[0];
        console.log("Info: ",_info)
        axios({
          method : 'get',
          url : "http://localhost:6969/api/score/listScoreOfStudent/{studentId}?studentId=" + _info.id,
          headers : {
            "Authorization" : localStorage.getItem("token"),
          }
        }).then((response) => {
            console.log("Student score",response.data.data[0]);
            setRows(response.data.data[0]);
        });
        
    });
  },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Môn học</StyledTableCell>
            <StyledTableCell align="right">Điểm miêng</StyledTableCell>
            <StyledTableCell align="right">Điểm 15 phút 1</StyledTableCell>
            <StyledTableCell align="right">Điểm 15 phút 2</StyledTableCell>
            <StyledTableCell align="right">Điểm 1 tiết 1</StyledTableCell>
            <StyledTableCell align="right">Điểm 1 tiết 2</StyledTableCell>
            <StyledTableCell align="right">Điểm thi</StyledTableCell>
            <StyledTableCell align="right">Điểm Trung Bình</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.subject}
              </StyledTableCell>
              <StyledTableCell align="right">{row.score15m1}</StyledTableCell>
              <StyledTableCell align="right">{row.score15m2}</StyledTableCell>
              <StyledTableCell align="right">{row.score15m3}</StyledTableCell>
              <StyledTableCell align="right">{row.score45m1}</StyledTableCell>
              <StyledTableCell align="right">{row.score45m2}</StyledTableCell>
              <StyledTableCell align="right">{row.score90m}</StyledTableCell>
              <StyledTableCell align="right">
                {row.averageScore}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}