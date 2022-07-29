import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { TimetableCT } from "../mock/timetable";
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
  Button,
  IconButton,
} from "@mui/material";
// import { EditIcon, DoneIcon, RevertIcon } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import HistoryIcon from "@mui/icons-material/History";
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

const createData = (row) => ({
  ...row,
  isEditMode: false,
});

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode && name !== "lesson" ? (
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

let schedule;
let isPost = false;
export default function SetSchedule({ classId }) {
  function defaultSchedule() {
    var schedule = [];
    for (var i = 1; i < 6; i++) {
      schedule.push({
        classId,
        lesson: i,
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
      });
    }
    isPost = true;
    return schedule;
  }

  const [rows, setRows] = React.useState(
    schedule
      ? schedule.map((row) => createData(row))
      : defaultSchedule().map((row) => createData(row))
  );
  // const [previous, setPrevious] = React.useState({});
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:6969/api/class/timetable/" + classId,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      schedule = res.data.data;
      console.log("schedule: ", schedule);
      console.log("Schedule Length: ", schedule.length);
      if (schedule.length > 0){
        const ordered = Object.keys(schedule).sort().reduce(
          (obj, key) => { 
            obj[key] = schedule[key]; 
            return obj;
          }, 
          {}
        );
        console.log("ordered: ", ordered)
        setRows(ordered.map((row) => createData(row)));
      } 
      else {
        for (var i = 0; i < defaultSchedule().length; i++) {
          axios({
            method: "post",
            url: "http://localhost:6969/api/class/timetable",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
            data: defaultSchedule()[i],
          }).then(() => {});
        }
        setRows(defaultSchedule().map((row) => createData(row)));
      }
    });
  }, []);
  const classes = useStyles();

  const onToggleEditMode = (id) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.lesson === id) {
          if (row.isEditMode === true) {
            axios({
              method: "patch",
              url: "http://localhost:6969/api/class/timetable/" + classId,
              headers: {
                Authorization: localStorage.getItem("token"),
              },
              data: row,
            }).then(() => {});
            return { ...row, isEditMode: !row.isEditMode };
          } else return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    const value = e.target.value;
    const name = e.target.name;
    const { lesson } = row;
    const newRows = rows.map((row) => {
      if (row.lesson === lesson) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Tiết</TableCell>
            <TableCell align="left">Thứ 2</TableCell>
            <TableCell align="left">Thứ 3</TableCell>
            <TableCell align="left">Thứ 4</TableCell>
            <TableCell align="left">Thứ 5</TableCell>
            <TableCell align="left">Thứ 6</TableCell>
            <TableCell align="left">Thứ 7</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.lesson}>
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleEditMode(row.lesson)}
                    >
                      <DoneIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => onToggleEditMode(row.lesson)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              <CustomTableCell {...{ row, name: "lesson", onChange }} />
              <CustomTableCell {...{ row, name: "monday", onChange }} />
              <CustomTableCell {...{ row, name: "tuesday", onChange }} />
              <CustomTableCell {...{ row, name: "wednesday", onChange }} />
              <CustomTableCell {...{ row, name: "thursday", onChange }} />
              <CustomTableCell {...{ row, name: "friday", onChange }} />
              <CustomTableCell {...{ row, name: "saturday", onChange }} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
