import React from "react";
import ListTable from "./ListTable";
import { useState } from "react";
import { studentList } from "../mock/student";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddStudentForm from "./AddStudentForm";
import Modal from "@mui/material/Modal";
import Searchbar from "./Search";
import FilterStudent from "./FilterStudent";
import { useEffect } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
let classes;
export default function StudentManage() {
  const columns = [
    { id: "name", label: "Họ và tên", minWidth: 100 },
    { id: "dateOfBirth", label: "Ngày sinh", minWidth: 80, align: "center" },
    {
      id: "sex",
      label: "Giới tính",
      minWidth: 50,
      align: "center",
      //format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "class",
      label: "Lớp",
      minWidth: 50,
      align: "center",
      //format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "email",
      label: "Email",
      minWidth: 100,
      align: "center",
      //format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "phone",
      label: "Số điện thoại",
      minWidth: 100,
      align: "center",
      //format: (value) => value.toFixed(2),
    },
    {
      id: "info",
      label: "",
      minWidth: 50,
      align: "center",
    },
  ];

  const [rows, setRows] = useState([]);

  useEffect( () => {
    axios({
      method : 'get',
      url : "http://localhost:6969/api/class",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      }
    }).then((resClasses) => {
      classes = resClasses.data.data.data;
      axios({
        method : 'get',
        url : "http://localhost:6969/api/student",
        headers : {
          "Authorization" : localStorage.getItem("token"),
        }
      }).then((res) => {
        var _rows = res.data.data.data;
        for(var i = 0; i < _rows.length; i++){
          _rows[i].class = classes.filter((cl) => cl.id === _rows[i].classId)[0].name;
        }
        setRows(_rows);
      })});
  }, []);

  const addStudent = (student) => {
    axios({
      method : 'post',
      url : "http://localhost:6969/api/student",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      },
      data : student
    }).then(() => {
      console.log('1');
      student.class = classes.filter(cl => cl.id === student.classId)[0].name
      setRows([...rows, student]);
    });
  };
  const deleteStudent = (student) => {
    axios({
      method : 'delete',
      url : "http://localhost:6969/api/student/" + student.id,
      headers : {
        "Authorization" : localStorage.getItem("token"),
      }
    }).then(() => {
      const _new_rows = rows.filter((item) => item.id !== student.id);
      setRows(_new_rows);
    });
  };

  const modifyStudent = (student) => {
    console.log("Modify student", student)
    axios({
      method : 'patch',
      url : "http://localhost:6969/api/student/" + student.id,
      headers : {
        "Authorization" : localStorage.getItem("token"),
      },
      data : student
    }).then(() => {
      const _new_rows = rows.filter((item) => item.id !== student.id);
      student.class = classes.filter(cl => cl.id === student.classId)[0].name;
      setRows([..._new_rows, student]);
    });
  };
  
  const CrudStudent = (status, student) => {
    switch (status) {
      case "Add":
        addStudent(student);
        break;
      case "Saved":
        modifyStudent(student);
        break;
      case "Delete":
        deleteStudent(student);
        break;
      default:
        break;
    }
  };
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const [search, SetSearch] = useState("");
  const [gradeFilter, SetGradeFilter] = useState("");
  const [classFilter, SetClassFilter] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", margin: "10px" }}>
        <Searchbar search={search} SetSearch={SetSearch} />
        <FilterStudent SetGradeFilter={SetGradeFilter} SetClassFilter={SetClassFilter} />
      </Box>
      <ListTable
        columns={columns}
        rows={rows.filter(
          (item) =>
            item.name?.toLowerCase().includes(search.toLocaleLowerCase()) &&
            item.class
              ?.toLowerCase()
              .includes(gradeFilter.toLocaleLowerCase()) &&
            item.class?.toLowerCase().includes(classFilter.toLocaleLowerCase())
        )}
        crudStudent={CrudStudent}
        task = "StudentManage"
        classes = {classes}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          size="large"
          sx={{ width: "150px", marginTop: "20px", marginRight: "10px" }}
          onClick={handleOpenAdd}
        >
          Thêm học sinh
        </Button>
      </Box>

      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddStudentForm
            sx={style}
            crudStudent={CrudStudent}
            closeAddStudent={handleCloseAdd}
            classes = {classes}
            status="Add"
            info=""
          />
        </Box>
      </Modal>
    </Box>
  );
}
