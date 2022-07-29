import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddStudentForm from "./AddStudentForm";
import AddTeacherForm from "./AddTeacherForm";
import AddAccountantForm from "./AddAccountantForm";
import AddFacilityForm from "./AddFacilityForm";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import { padding } from "@mui/system";


let info;

export default function ListTable(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    paddingLeft: 4,
    paddingTop: 4,
    width: props.task === "StudentManage" ? "700px" : "500px",
    maxHeight: "100%",
    overflow : "scroll",
  };
  const columns = props.columns;
  const rows = props.rows;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = (inf) => {info = inf; setOpenAdd(true); console.log(info)}
  const handleCloseAdd = () => setOpenAdd(false);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky  table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{ bgcolor: "#9999ff" }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      var value;
                      if (column.id === "info")
                        value = (
                          <Button variant="outlined" size = "small" startIcon={<InfoIcon />} sx = {{height : "40px",width : "120px"}} onClick = {() => handleOpenAdd(row)}>
                            Xem thông tin
                          </Button>
                        );
                      else value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>

      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > 
        <Box sx={style} >
          {(props.task === "StudentManage") && <AddStudentForm crudStudent = {props.crudStudent} closeAddStudent = {handleCloseAdd} status = "Info" info = {info} classes = {props.classes}/>}
          {(props.task === "TeacherManage") && <AddTeacherForm crud = {props.crud} close = {handleCloseAdd} status = "Info" info = {info}/>}
          {(props.task === "AccountantManage") && <AddAccountantForm crud = {props.crud} close = {handleCloseAdd} status = "Info" info = {info}/>}
          {(props.task === "FacilityManage") && <AddFacilityForm crud = {props.crud} close = {handleCloseAdd} status = "Info" info = {info}/>}
        </Box>
      </Modal>
    </Paper>
  );
}
