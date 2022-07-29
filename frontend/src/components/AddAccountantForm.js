import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function AddAccountantForm({ close, crud, status, info }) {
  console.log(info);
  console.log("Status:" + status);

  const [name, setName] = useState(info === "" ? "" : info.name);
  const [birthday, setBirthDay] = useState(info === "" ? "" : info.dateOfBirth);
  const [sex, setSex] = useState(info === "" ? "" : info.sex);
  const [email, setEmail] = useState(info === "" ? "" : info.email);
  const [phone, setPhone] = useState(info === "" ? "" : info.phone);
  const [address, setAddress] = useState(info === "" ? "" : info.address);
  const [startWorking, setStartWorking] = useState(
    info === "" ? "" : info.startWorking
  );
  const [endWorking, setEndWorking] = useState(
    info === "" ? "" : info.endWorking
  );
  const [username, setUsername] = useState(info === "" ? "" : info.username);
  const [password, setPassword] = useState(info === "" ? "" : info.password);

  const [statusCurrent, SetStatusCurrent] = useState(status);
  const handleSubmit = (e) => {
    e.preventDefault();
    let o = {
      name,
      dateOfBirth : birthday,
      sex,
      email,
      phone : parseInt(phone),
      address,
      startWorking,
      username,
      password,
    };
    if(endWorking !== "") o = {...o, endWorking};
    crud("Add", o);
    close();
  };
  const handleInfo = (status) => {
    let o = {
      id: info.id,
      name,
      dateOfBirth : birthday,
      sex,
      email,
      phone : parseInt(phone),
      address,
      startWorking,
      username,
      password,
    };
    if(endWorking !== "") o = {...o, endWorking};
    crud(status, o);
    close();
  };
  const handleOnChange = (e, type) => {
    switch (type) {
      case "name": {
        setName(e.target.value);
        break;
      }
      case "birthday":
        setBirthDay(e.target.value);
        break;
      case "sex":
        setSex(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      case "startWorking":
        setStartWorking(e.target.value);
        break;
      case "endWorking":
        setEndWorking(e.target.value);
        break;
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
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
          label="Họ và tên"
          name="name"
          required
          autoComplete="off"
          disabled={!(statusCurrent !== "Info")}
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="birthday"
          value={birthday}
          label="Ngày sinh MM-DD-YYYY"
          name="birthday"
          autoComplete="off"
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
          id="sex"
          value={sex}
          label="Giới tính"
          name="sex"
          autoComplete="off"
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
          id="address"
          value={address}
          label="Địa chỉ"
          name="address"
          autoComplete="off"
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
          id="email"
          value={email}
          label="Email"
          name="email"
          required
          autoComplete="off"
          disabled={!(statusCurrent !== "Info")}
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />

        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="phone"
          value={phone}
          label="Số điện thoại"
          name="phone"
          autoComplete="off"
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
          id="startWorking"
          value={startWorking}
          label="Ngày bắt đầu làm việc"
          name="startWorking"
          autoComplete="off"
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
          id="endWorking"
          value={endWorking}
          label="Ngày thôi việc"
          required
          name="endWorking"
          autoComplete="off"
          disabled={!(statusCurrent !== "Info")}
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
          id="address"
          value={username}
          label="Username"
          name="username"
          autoComplete="off"
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
          id="password"
          value={password}
          label="Password"
          required
          name="password"
          autoComplete="off"
          disabled={!(statusCurrent !== "Info")}
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
