import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function AddFacilityForm({ close, crud, status, info }) {
  const [name, setName] = useState(info === "" ? "" : info.name);
  const [number, setNumber] = useState(info === "" ? "" : info.total);
  const [totalPrice, setTotalPrice] = useState(info === "" ? "" : info.price);
  const [position, setPosition] = useState(info === "" ? "" : info.location);
  const [inputTime, setInputTime] = useState(info === "" ? "" : info.timeIn);
  const [statusActive, setStatusActive] = useState(info === "" ? "" : info.status);

  const [statusCurrent, SetStatusCurrent] = useState(status);
  const handleSubmit = (e) => {
    e.preventDefault();
    const o = {
      name,
      total : parseInt(number),
      price : parseInt(totalPrice),
      location : position,
      timeIn : inputTime,
      status : statusActive,
    };
    crud("Add", o);
    close();
  };
  const handleInfo = (status) => {
    const o = {
      id: parseInt(info.id),
      name,
      total : parseInt(number),
      price : parseInt(totalPrice),
      location : position,
      timeIn : inputTime,
      status : statusActive,
    };
    crud(status, o);
    close();
  };

  const handleOnChange = (e, type) => {
    switch (type) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      case "totalPrice":
        setTotalPrice(e.target.value);
        break;
      case "position":
        setPosition(e.target.value);
        break;
      case "inputTime":
        setInputTime(e.target.value);
        break;
      case "statusActive":
        setStatusActive(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="name"
          value={name}
          label="Tên cơ sở vật chất"
          name="name"
          required
          autoComplete="off"
          color = "success"
          disabled={!(statusCurrent !== "Info")}
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="number"
          value={number}
          label="Số lượng"
          name="number"
          autoComplete="off"
          color = "success"
          disabled={!(statusCurrent !== "Info")}
          required
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
      </div>

      <div>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="totalPrice"
          value={totalPrice}
          label="Tổng tiền"
          name="totalPrice"
          autoComplete="off"
          color = "success"
          disabled={!(statusCurrent !== "Info")}
          required
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="position"
          value={position}
          label="Vị trí"
          name="position"
          autoComplete="off"
          color = "success"
          disabled={!(statusCurrent !== "Info")}
          required
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
      </div>
      <div>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="inputTime"
          value={inputTime}
          label="Thời gian nhập"
          name="inputTime"
          required
          autoComplete="off"
          color = "success"
          disabled={!(statusCurrent !== "Info")}
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />

        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="statusActive"
          value={statusActive}
          label="Tình trạng"
          name="statusActive"
          autoComplete="off"
          color = "success"
          disabled={!(statusCurrent !== "Info")}
          required
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
      </div>
      
      <div>
        {statusCurrent !== "Info" && statusCurrent !== "Modify" && (
          <Button
            className="nice-button"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            autoComplete="off"
            sx={{ marginLeft: "10px", width: "25ch", marginBottom: "20px" }}
          >
            Thêm
          </Button>
        )}

        {statusCurrent === "Info" && (
          <Button
            className="nice-button"
            type="rectify"
            fullWidth
            variant="contained"
            color="primary"
            autoComplete="off"
            sx={{ marginLeft: "10px", width: "25ch", marginBottom: "20px" }}
            onClick={() => SetStatusCurrent("Modify")}
          >
            Sửa
          </Button>
        )}

        {statusCurrent === "Info" && (
          <Button
            className="nice-button"
            type="delete"
            fullWidth
            variant="contained"
            color="primary"
            autoComplete="off"
            sx={{ marginLeft: "10px", width: "25ch", marginBottom: "20px" }}
            onClick={() => handleInfo("Delete")}
          >
            Xóa
          </Button>
        )}

        {statusCurrent === "Modify" && (
          <Button
            className="nice-button"
            type="save"
            fullWidth
            variant="contained"
            color="primary"
            autoComplete="off"
            sx={{ marginLeft: "10px", width: "25ch", marginBottom: "20px" }}
            onClick={() => handleInfo("Saved")}
          >
            Lưu
          </Button>
        )}

        {statusCurrent === "Modify" && (
          <Button
            className="nice-button"
            type="Break"
            fullWidth
            variant="contained"
            color="primary"
            autoComplete="off"
            sx={{ marginLeft: "10px", width: "25ch", marginBottom: "20px" }}
            onClick={() => close()}
          >
            Thoát
          </Button>
        )}
      </div>
    </Box>
  );
}
