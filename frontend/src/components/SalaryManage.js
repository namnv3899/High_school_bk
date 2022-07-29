import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@mui/styles";
import { TeacherList } from "../mock/teacher";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Input,
  Paper,
  IconButton,
} from "@mui/material";
// import { EditIcon, DoneIcon, RevertIcon } from "@mui/icons-material";
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import HistoryIcon from '@mui/icons-material/History';
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

const createData = (row) => ({
  ...row,
  isEditMode: false
});

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode && name === "salary"  ? (
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

export default function SalaryManager() {
  const [rows, setRows] = React.useState(TeacherList.map( (row) => createData(row)) );
  useEffect( () => {
    axios({
      method : 'get',
      url : "http://localhost:6969/api/teacher",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      }
    }).then(
      (res) => setRows(res.data.data.data.map( (row) => createData(row))));
  }, []);

  const classes = useStyles();

  const onToggleEditMode = (id) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.id === id) {
          console.log("isEditMode: ", row.isEditMode)
          if(row.isEditMode === true){
            axios({
              method : 'patch',
              url : "http://localhost:6969/api/teacher/" + row.id,
              headers : {
                "Authorization" : localStorage.getItem("token"),
              },
              data : row
            }).then(() => {
              
            });
            return { ...row, isEditMode: !row.isEditMode };
          }else{
            return { ...row, isEditMode: !row.isEditMode };
          }
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

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">

        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Họ và tên</TableCell>
            <TableCell align="left">Ngày sinh</TableCell>
            <TableCell align="left">Môn dạy</TableCell>
            <TableCell align="left">Lương</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleEditMode(row.id)}
                    >
                      <DoneIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => onToggleEditMode(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              <CustomTableCell {...{ row, name: "name", onChange }} />
              <CustomTableCell {...{ row, name: "dateOfBirth", onChange }} />
              <CustomTableCell {...{ row, name: "subject", onChange }} />
              <CustomTableCell {...{ row, name: "salary", onChange }} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
