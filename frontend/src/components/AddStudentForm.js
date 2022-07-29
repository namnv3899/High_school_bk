import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

function AddStudentForm({
  closeAddStudent,
  crudStudent,
  status,
  info,
  classes,
}) {
  const [name, setName] = useState(info === "" ? "" : info.name);
  const [birthday, setBirthDay] = useState(info === "" ? "" : info.dateOfBirth);
  const [sex, setSex] = useState(info === "" ? "" : info.sex);
  const [classname, setClassName] = useState(info === "" ? "" : info.classId);
  const [email, setEmail] = useState(info === "" ? "" : info.email);
  const [phone, setPhone] = useState(info === "" ? "" : info.phone);
  const [address, setAddress] = useState(info === "" ? "" : info.address);
  const [fatherName, setFatherName] = useState(
    info === "" ? "" : info.fatherName
  );
  const [fatherJob, setFatherJob] = useState(info === "" ? "" : info.fatherJob);
  const [fatherPhoneNumber, setFatherPhoneNumber] = useState(
    info === "" ? "" : info.fatherPhone
  );
  const [fatherDateOfBirth, setFatherDateOfBirth] = useState(
    info === "" ? "" : info.fatherDateOfBirth
  );
  const [fatherJobAddress, setFatherJobAddress] = useState(
    info === "" ? "" : info.fatherJobAddress
  );
  const [motherName, setMotherName] = useState(
    info === "" ? "" : info.motherName
  );
  const [motherJob, setMotherJob] = useState(info === "" ? "" : info.motherJob);
  const [motherPhone, setMotherPhone] = useState(
    info === "" ? "" : info.motherPhone
  );
  const [motherDateOfBirth, setMotherDateOfBirth] = useState(
    info === "" ? "" : info.motherDateOfBirth
  );
  const [motherJobAddress, setMotherJobAddress] = useState(
    info === "" ? "" : info.motherJobAddress
  );
  const [schoolYear, setSchoolYear] = useState(
    info === "" ? "" : info.startStudying
  );
  const [username, setUsername] = useState(info === "" ? "" : info.username);
  const [password, setPassword] = useState(info === "" ? "" : info.password);

  const [statusCurrent, SetStatusCurrent] = useState(status);
  const handleSubmit = (e) => {
    e.preventDefault();
    const o = {
      name,
      dateOfBirth: birthday,
      sex,
      classId: classname,
      email,
      phone: parseInt(phone),
      address,
      fatherName,
      fatherJob,
      fatherPhone: parseInt(fatherPhoneNumber),
      fatherDateOfBirth,
      fatherJobAddress,
      motherName,
      motherJob,
      motherPhone,
      motherDateOfBirth,
      motherJobAddress,
      startStudying: schoolYear,
      username,
      password,
    };
    console.log("Add Student : ", o);
    crudStudent("Add", o);
    closeAddStudent();
  };
  const handleInfo = (status) => {
    const o = {
      id: info.id,
      name,
      dateOfBirth: birthday,
      sex,
      classId: classname,
      email,
      phone: parseInt(phone),
      address,
      fatherName,
      fatherJob,
      fatherPhone: parseInt(fatherPhoneNumber),
      fatherDateOfBirth,
      fatherJobAddress,
      motherName,
      motherJob,
      motherPhone,
      motherDateOfBirth,
      motherJobAddress,
      startStudying: schoolYear,
      username,
      password,
    };
    crudStudent(status, o);
    closeAddStudent();
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
      case "classname":
        setClassName(e.target.value);
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
      case "fatherName":
        setFatherName(e.target.value);
        break;
      case "fatherJob":
        setFatherJob(e.target.value);
        break;
      case "fatherPhoneNumber":
        setFatherPhoneNumber(e.target.value);
        break;
      case "fatherDateOfBirth":
        setFatherDateOfBirth(e.target.value);
        break;
      case "fatherJobAddress":
        setFatherJobAddress(e.target.value);
        break;
      case "motherName":
        setMotherName(e.target.value);
        break;
      case "motherJob":
        setMotherJob(e.target.value);
        break;
      case "motherPhone":
        setMotherPhone(e.target.value);
        break;
      case "motherDateOfBirth":
        setMotherDateOfBirth(e.target.value);
        break;
      case "motherJobAddress":
        setMotherJobAddress(e.target.value);
        break;
      case "schoolYear":
        setSchoolYear(e.target.value);
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
        <h2>Student</h2>
        {statusCurrent === "Info" && (
          <div>
            <Avatar
              alt="Avatar"
              src={info.avatar}
              sx={{ width: 80, height: 80 }}
            />
            <br></br>
          </div>
        )}
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
      </div>
      <div>
        {/* <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="classname"
          value={classname}
          label="Lớp"
          required
          name="classname"
          autoComplete="off"
          disabled={!(statusCurrent !== "Info")}
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        /> */}
        <FormControl
          sx={{
            marginTop: "10px",
            marginLeft: "5px",
            marginRight: "8px",
            minWidth: 183,
            minHeight: 30,
          }}
          size="medium"
          disabled = {!(statusCurrent !== "Info")}
        >
          <InputLabel id="demo-select-small">Lớp</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={classname}
            label="Lớp"
            name="classname"
            onChange={(e) => {
              handleOnChange(e, e.target.name);
            }}
          >
            {classes.map((cl) => (
              <MenuItem value={cl.id}>{cl.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
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
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="schoolYear"
          value={schoolYear}
          label="Ngày nhập học"
          name="schoolYear"
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
          id="username"
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
          name="password"
          autoComplete="off"
          disabled={!(statusCurrent !== "Info")}
          required
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
      </div>
      <Divider />
      <div>
        <h2>Father</h2>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="fatherName"
          value={fatherName}
          label="Họ và tên bố"
          required
          name="fatherName"
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
          id="address"
          value={fatherJob}
          label="Nghề nghiệp"
          name="fatherJob"
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
          id="fatherPhoneNumber"
          value={fatherPhoneNumber}
          label="Số điện thoại"
          required
          name="fatherPhoneNumber"
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
          id="fatherDateOfBirth"
          value={fatherDateOfBirth}
          label="Ngày sinh"
          name="fatherDateOfBirth"
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
          id="fatherJobAddress"
          value={fatherJobAddress}
          label="Nơi làm việc"
          required
          name="fatherJobAddress"
          autoComplete="off"
          disabled={!(statusCurrent !== "Info")}
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
      </div>
      <Divider></Divider>
      <div>
        <h2>Mother</h2>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="motherName"
          value={motherName}
          label="Họ và tên mẹ"
          name="motherName"
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
          id="motherJob"
          value={motherJob}
          label="Nghề nghiệp"
          required
          name="motherJob"
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
          id="motherDateOfBirth"
          value={motherDateOfBirth}
          label="Ngày sinh"
          name="motherDateOfBirth"
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
          id="motherPhone"
          value={motherPhone}
          label="Số điện thoại"
          required
          name="motherPhone"
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
          id="motherJobAddress"
          value={motherJobAddress}
          label="Nơi làm việc"
          required
          name="motherJobAddress"
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
            onClick={() => closeAddStudent()}
          >
            Thoát
          </Button>
        )}
      </div>
    </Box>
  );
}

export default AddStudentForm;
