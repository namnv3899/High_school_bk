import React, { useEffect } from "react";
import ListTable from "./ListTable";
import { useState } from "react";
import {AccountantList} from "../mock/accountant"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddAccountantForm from "./AddAccountantForm";
import Modal from "@mui/material/Modal";
import Searchbar from "./Search";
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
export default function AccountantManage() {
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
      url : "http://localhost:6969/api/accountant",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      }
    }).then((res) => setRows(res.data.data.data));
  }, []);

  const addAcc = (acc) => {
    console.log(acc);
    axios({
      method : 'post',
      url : "http://localhost:6969/api/accountant",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      },
      data : acc
    }).then(() => {
      const _new_rows = [...rows];
      _new_rows.push(acc);
      setRows(_new_rows);
    });
  };

  const deleteAcc = (acc) => {
    axios({
      method : 'delete',
      url : "http://localhost:6969/api/accountant/" + acc.id,
      headers : {
        "Authorization" : localStorage.getItem("token"),
      }
    }).then(() => {
      const _new_rows = rows.filter((item) => item.id !== acc.id);
      setRows(_new_rows);
    });
  };

  const modifyAcc = (acc) => {
    axios({
      method : 'patch',
      url : "http://localhost:6969/api/accountant/" + acc.id,
      headers : {
        "Authorization" : localStorage.getItem("token"),
      },
      data : acc
    }).then(() => {
      const _new_rows = rows.filter((item) => item.id !== acc.id);
      setRows([..._new_rows, acc]);
    });
  };
  const crudAcc = (status, item) => {
    switch (status) {
      case "Add":
        addAcc(item);
        break;
      case "Saved":
        modifyAcc(item);
        break;
      case "Delete":
        deleteAcc(item);
        break;
      default:
        break;
    }
  };
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const [search, SetSearch] = useState("");

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
      </Box>

      <ListTable
        columns={columns}
        rows={rows.filter(
          (item) =>
            item.name?.toLowerCase().includes(search.toLocaleLowerCase())
        )}
        crud={crudAcc}
        task = "AccountantManage"
      />

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          size="large"
          sx={{ width: "150px", marginTop: "20px", marginRight: "10px" }}
          onClick={handleOpenAdd}
        >
          Thêm kế toán
        </Button>
      </Box>

      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddAccountantForm
            crud={crudAcc}
            close={handleCloseAdd}
            status="Add"
            info=""
          />
        </Box>
      </Modal>
    </Box>
  );
}
