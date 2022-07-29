import React from "react";
import ListClassTable from "./ListClassTable";
import { useState } from "react";
import { ClassList } from "../mock/class";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Select, MenuItem} from "@mui/material"
import Modal from "@mui/material/Modal";
import FilterStudent from "./FilterStudent";
import AddClassForm from "./AddClassForm";
import TeacherAssign from "./TeacherAssign";
import { useEffect } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ClassManage() {
  const columns = [
    { id: "name", label: "Tên lớp", minWidth: 100 },
    { id: "location", label: "Vị trí", minWidth: 80, align: "center" },
    { id: "startYear", label: "Năm bắt đầu", minWidth: 80, align: "center" },
    {
      id: "endYear",
      label: "Năm kết thúc",
      minWidth: 50,
      align: "center",
      //format: (value) => value.toLocaleString('en-US'),
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
    }).then((res) => {
      setRows(res.data.data.data);
    } );
  }, []);

  const addClass = (classItem) => {
    console.log(classItem);
    axios({
      method : 'post',
      url : "http://localhost:6969/api/class",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      },
      data : classItem
    }).then(() => {
      const _new_rows = [...rows];
      _new_rows.push(classItem);
      setRows(_new_rows);
    });
  };

  const deleteClass = (classItem) => {
    axios({
      method : 'delete',
      url : "http://localhost:6969/api/class/" + classItem.id,
      headers : {
        "Authorization" : localStorage.getItem("token"),
      }
    }).then(() => {
      const _new_rows = rows.filter((item) => item.id !== classItem.id);
      setRows(_new_rows);
    });
  };

  const modifyClass = (classItem) => {
    axios({
      method : 'patch',
      url : "http://localhost:6969/api/class/" + classItem.id,
      headers : {
        "Authorization" : localStorage.getItem("token"),
      },
      data : classItem
    }).then(() => {
      const _new_rows = rows.filter((item) => item.id !== classItem.id);
      setRows([..._new_rows, classItem]);
    });
  };
  const Crud = (status, classItem) => {
    switch (status) {
      case "Add":
        addClass(classItem);
        break;
      case "Saved":
        modifyClass(classItem);
        break;
      case "Delete":
        deleteClass(classItem);
        break;
      default:
        break;
    }
  };
  const [openAdd, setOpenAdd] = useState(false);

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

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
        <FilterStudent SetGradeFilter={SetGradeFilter} SetClassFilter={SetClassFilter} />
      </Box>

      <ListClassTable
        columns={columns}
        rows={rows.filter(
          (item) =>
            item.name?.toLowerCase().includes(gradeFilter.toLocaleLowerCase())
            && item.name?.toLowerCase().includes(classFilter.toLocaleLowerCase())
        )
        }
        crud={Crud}
      />

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          size="large"
          sx={{ width: "150px", marginTop: "20px", marginRight: "10px" }}
          onClick={handleOpenAdd}
        >
          Thêm lớp học
        </Button>
      </Box>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddClassForm
            crud={Crud}
            close={handleCloseAdd}
            status="Add"
            info=""
          />
        </Box>
      </Modal>
    </Box>
  );
}
