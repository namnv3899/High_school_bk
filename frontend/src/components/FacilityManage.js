import React from "react";
import ListTable from "./ListTable";
import { useState } from "react";
import { FacilityList } from "../mock/facility";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddFacilityForm from "./AddFacilityForm";
import Modal from "@mui/material/Modal";
import Searchbar from "./Search";
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
export default function FacilityManage() {
  const columns = [
    { id: "name", label: "Tên cơ sở vật chất", minWidth: 100 },
    { id: "total", label: "Số lượng", minWidth: 80, align: "center" },
    { id: "price", label: "Tổng tiền", minWidth: 80, align: "center" },
    {
      id: "location",
      label: "Vị trí ",
      minWidth: 50,
      align: "center",
      //format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "timeIn",
      label: "Thời gian nhập",
      minWidth: 100,
      align: "center",
      //format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "status",
      label: "Tình trạng",
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
      url : "http://localhost:6969/api/facility",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      }
    }).then((res) => setRows(res.data.data.data));
  }, []);

  const addFactility = (facility) => {
    axios({
      method : 'post',
      url : "http://localhost:6969/api/facility",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      },
      data : facility
    }).then(() => {
      const _new_rows = [...rows];
      _new_rows.push(facility);
      setRows(_new_rows);
    });
  };

  const deleteFacility = (facility) => {
    axios({
      method : 'delete',
      url : "http://localhost:6969/api/facility/" + facility.id,
      headers : {
        "Authorization" : localStorage.getItem("token"),
      }
    }).then(() => {
      const _new_rows = rows.filter((item) => item.id !== facility.id);
      setRows(_new_rows);
    });
  };

  const modifyFacility = (facility) => {
    axios({
      method : 'patch',
      url : "http://localhost:6969/api/facility/" + facility.id,
      headers : {
        "Authorization" : localStorage.getItem("token"),
      },
      data : facility
    }).then(() => {
      const _new_rows = rows.filter((item) => item.id !== facility.id);
      setRows([..._new_rows, facility]);
    });
  };

  const Crud = (status, facility) => {
    switch (status) {
      case "Add":
        addFactility(facility);
        break;
      case "Saved":
        modifyFacility(facility);
        break;
      case "Delete":
        deleteFacility(facility);
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
        crud={Crud}
        task = "FacilityManage"
      />

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          size="large"
          sx={{ width: "150px", marginTop: "20px", marginRight: "10px" }}
          onClick={handleOpenAdd}
        >
          Thêm cơ sở vật chất
        </Button>
      </Box>

      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddFacilityForm
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
