import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@mui/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Input,
  Paper,
  IconButton,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  Button,
} from "@mui/material";
// import { EditIcon, DoneIcon, RevertIcon } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import HistoryIcon from "@mui/icons-material/History";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60,
  },
  tableCell: {
    width: 130,
    height: 40,
  },
  input: {
    width: 130,
    height: 40,
  },
}));

const createData = (data) => ({
  ...data,
  isEditMode: false,
});

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode &&
      name !== "name" &&
      name !== "dateOfBirth" &&
      name !== "averageScore" ? (
        <Input
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};
let _infoTeacher;
export default function ScoreInputTable() {
  const [rows, setRows] = React.useState([
    createData({
      id: 1,
      name: "Vũ Hoàng Phúc",
      dateOfBirth: "15-10-2000",
      score15m1: 9.5,
      score15m2: 6.0,
      score15m3: 9.0,
      score45m1: 10.0,
      score45m2: 10.0,
      score90m: 8.5,
    }),
  ]);
  const classes = useStyles();

  const onToggleEditMode = (id) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.studentId === id) {
          if (row.isEditMode === true) {
            if (row.scoreId === "") {
              if (row.score15m1 === "") row.score15m1 = null
              else row.score15m1 = parseInt(row.score15m1);

              if (row.score15m2 === "") row.score15m2= null;
              else row.score15m2 = parseInt(row.score15m2);

              if (row.score15m3 === "") row.score15m3= null;
              else row.score15m3 = parseInt(row.score15m3);

              if (row.score45m1 === "") row.score45m1= null;
              else row.score45m1 = parseInt(row.score45m1);

              if (row.score45m2 === "") row.score45m2= null;
              else row.score45m2 = parseInt(row.score45m2);

              if (row.score90m === "") row.score90m= null;
              else row.score90m = parseInt(row.score90m);

              console.log("Row: " + row);
              axios({
                method: "post",
                url: "http://localhost:6969/api/score",
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
                data: row,
              }).then((rs) => {
                row = rs.data.data;
              });
              return { ...row, isEditMode: !row.isEditMode };
            } else {
              var _row = JSON.parse(JSON.stringify(row));
              if (row.score15m1 === "") row.score15m1 = null
              else row.score15m1 = parseInt(row.score15m1);

              if (row.score15m2 === "") row.score15m2= null;
              else row.score15m2 = parseInt(row.score15m2);

              if (row.score15m3 === "") row.score15m3= null;
              else row.score15m3 = parseInt(row.score15m3);

              if (row.score45m1 === "") row.score45m1= null;
              else row.score45m1 = parseInt(row.score45m1);

              if (row.score45m2 === "") row.score45m2= null;
              else row.score45m2 = parseInt(row.score45m2);

              if (row.score90m === "") row.score90m = null;
              else row.score90m = parseInt(row.score90m);

              console.log("Row: " + row.data);
              axios({
                method: "patch",
                url: "http://localhost:6969/api/score/" + row.scoreId,
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
                data: row,
              }).then((rs) => {
                row = rs.data.data;
              });
              return { ..._row, isEditMode: !row.isEditMode };
            }
          } else return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const [classId, setClassId] = React.useState("");
  const [listClassOfTeacher, setListClassOfTeacher] = React.useState([]);

  const handleChange = (event) => {
    if (event.target.value !== "")
      axios({
        method: "get",
        url: "http://localhost:6969/api/student/" + event.target.value,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((res) => {
        console.log("List student response: ", res.data.data[0]);
        // Lấy ra danh sách tất cả các học sinh
        var _students = res.data.data[0];
        for (var i = 0; i < _students.length; i++) {
          _students[i]["studentId"] = _students[i].id;
          _students[i]["score15m1"] = "";
          _students[i]["score15m2"] = "";
          _students[i]["score15m3"] = "";
          _students[i]["score45m1"] = "";
          _students[i]["score45m2"] = "";
          _students[i]["score90m"] = "";
          _students[i]["subject"] = _infoTeacher.subject;
          _students[i]["scoreId"] = "";
        }
        //Lấy ra danh sách điểm của môn học của lớp
        axios({
          method: "get",
          url:
            "http://localhost:6969/api/score/listScoreOfOneSubject?classId=" +
            event.target.value +
            "&subject=" +
            _infoTeacher.subject,
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }).then((response) => {
          let _scores = response.data.data;
          console.log("List scores: ", _scores);
          for (var i = 0; i < _scores.length; i++) {
            for (var j = 0; j < _students.length; j++) {
              if (_students[j].studentId === _scores[i].studentId) {
                _students[j] = { ..._students[j], ..._scores[i] };
                _students[j]["scoreId"] = _scores[i].id;
              }
            }
          }
          console.log("List students: ", _students);
          setRows(_students.map((st) => createData(st)));
        });
      });
    
    setClassId(event.target.value);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:6969/api/teacher",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      _infoTeacher = res.data.data.data.filter(
        (item) =>
          item.username === JSON.parse(localStorage.getItem("user")).username
      )[0];
      axios({
        method: "get",
        url:
          "http://localhost:6969/api/class/listClassOfTeacher/" +
          _infoTeacher.id,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((response) => {
        console.log(response.data.data);
        setListClassOfTeacher(response.data.data);
      });
    });
  }, []);
  return (
    <Paper className={classes.root}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Lớp</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={classId}
          label="Class"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {listClassOfTeacher.map((cls) => (
            <MenuItem value={cls.id}>{cls.name}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Hãy chọn lớp để nhập điểm</FormHelperText>
      </FormControl>
      {classId !== "" && (
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="left" />
              <TableCell align="left">Họ và tên</TableCell>
              <TableCell align="left">Ngày sinh</TableCell>
              <TableCell align="left">Điểm miệng</TableCell>
              <TableCell align="left">Điểm 15 phút 1</TableCell>
              <TableCell align="left">Điểm 15 phút 2</TableCell>
              <TableCell align="left">Điểm 1 tiết 1</TableCell>
              <TableCell align="left">Điểm 1 tiết 2</TableCell>
              <TableCell align="left">Điểm thi</TableCell>
              <TableCell align="left">Điểm trung bình</TableCell>
              <TableCell align="left">Tính điểm trung bình</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.studentId}>
                <TableCell className={classes.selectTableCell}>
                  {row.isEditMode ? (
                    <>
                      <IconButton
                        aria-label="done"
                        onClick={() => onToggleEditMode(row.studentId)}
                      >
                        <DoneIcon />
                      </IconButton>
                    </>
                  ) : (
                    <IconButton
                      aria-label="delete"
                      onClick={() => onToggleEditMode(row.studentId)}
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                </TableCell>
                <CustomTableCell {...{ row, name: "name", onChange }} />
                <CustomTableCell {...{ row, name: "dateOfBirth", onChange }} />
                <CustomTableCell {...{ row, name: "score15m1", onChange }} />
                <CustomTableCell {...{ row, name: "score15m2", onChange }} />
                <CustomTableCell {...{ row, name: "score15m3", onChange }} />
                <CustomTableCell {...{ row, name: "score45m1", onChange }} />
                <CustomTableCell {...{ row, name: "score45m2", onChange }} />
                <CustomTableCell {...{ row, name: "score90m", onChange }} />
                <CustomTableCell {...{ row, name: "averageScore", onChange }} />
                <Button
                  variant="outlined"
                  sx={{ marginTop: "20px" }}
                  onClick={() => {
                    if (row.scoreId !== "")
                      axios({
                        method: "get",
                        url:
                          "http://localhost:6969/api/score/averageScore?id=" +
                          row.scoreId,
                        headers: {
                          Authorization: localStorage.getItem("token"),
                        },
                      }).then((res) => {
                        console.log("average", res.data.data);
                        let _rows = rows;
                        for (var i = 0; i < _rows.length; i++)
                          if (_rows[i].scoreId == res.data.data.id)
                            _rows[i]["averageScore"] =
                              res.data.data.averageScore;
                        console.log(_rows);
                        setRows(_rows.map((st) => createData(st)));
                      });
                  }}
                >
                  Average
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
}
