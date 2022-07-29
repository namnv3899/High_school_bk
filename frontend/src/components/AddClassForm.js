import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function AddClassForm({ close, crud, status, info }) {
  const [name, setName] = useState(info === "" ? "" : info.name);
  const [location, setLocation] = useState(info === "" ? "" : info.location);
  const [startYear, setStartYear] = useState(info === "" ? "" : info.startYear);
  const [endYear, setEndYear] = useState(info === "" ? "" : info.endYear);

  const [statusCurrent, SetStatusCurrent] = useState(status);
  const handleSubmit = (e) => {
    e.preventDefault();
    const o = {
      name : name.toString(),
      location : location.toString(),
      startYear : parseInt(startYear),
      endYear : parseInt(endYear)
    };
    crud("Add", o);
    close();
  };
  const handleInfo = (status) => {
    const o = {
      id: parseInt(info.id),
      name : name.toString(),
      location : location.toString(),
      startYear : parseInt(startYear),
      endYear : parseInt(endYear)
    };
    crud(status, o);
    close();
  };

  const handleOnChange = (e, type) => {
    switch (type) {
      case "name":
        setName(e.target.value);
        break;
      case "location":
        setLocation(e.target.value);
        break;
      case "startYear":
        setStartYear(e.target.value);
        break;
      case "endYear":
        setEndYear(e.target.value);
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
          label="Tên lớp"
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
          id="location"
          value={location}
          label="Vị trí"
          name="location"
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
          id="startYear"
          value={startYear}
          label="Năm bắt đầu"
          name="startYear"
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
          id="endYear"
          value={endYear}
          label="Năm kết thúc"
          name="endYear"
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
