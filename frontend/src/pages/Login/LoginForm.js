import React, { useContext } from "react";
import {
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { UserContext } from "../../context/UserContext";

function LoginForm(props) {
  const userContext = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleOnChange = (event, type) => {
    switch (type) {
      case "username": {
        setUsername(event.target.value);
        break;
      }
      case "password": {
        setPassword(event.target.value);
        break;
      }
      case "role": {
        setRole(event.target.value);
        break;
      }
      default: {
        break;
      }
    }
  };
  const navigate = useNavigate();
  // Connect db
  const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}
  const handeSubmit = async (event) => {
    event.preventDefault();
    var data = {
      username: username,
      password: password,
      role: role,
    };
    axios.post("http://localhost:6969/api/auth/login", data
      ).then(res => {
      localStorage.setItem("token", "Bearer "+ res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(data));
      console.log(res.data);
      // userContext.setUser((prev) => ({
      //   username,
      //   password,
      //   role,
      // }))
      navigate("/");
    });
    setUsername("");
    setPassword("");
  };
  return (
    <div style={{ width: "500px", margin: "auto", marginTop: "200px" }}>
      <div style={{ fontSize: "28px" }}>Login</div>
      <form onSubmit={handeSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          value={username}
          label="Tên tài khoản"
          name="username"
          required
          autoComplete="off"
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
        <TextField
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          id="password"
          value={password}
          label="Mật khẩu"
          name="password"
          autoComplete="off"
          required
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
        <FormControl sx={{ m: 0, minWidth: 120, minHeight: 30 }} size="small">
          <InputLabel id="demo-select-small">Role</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={role}
            label="Vai trò"
            name="role"
            onChange={(e) => {
              handleOnChange(e, e.target.name);
            }}
          >
            <MenuItem value={"Admin"}>Admin</MenuItem>
            <MenuItem value={"Teacher"}>Teacher</MenuItem>
            <MenuItem value={"Student"}>Student</MenuItem>
            <MenuItem value={"Parent"}>Parent</MenuItem>
            <MenuItem value={"Accountant"}>Accountant</MenuItem>
          </Select>
        </FormControl>
        <Button
          style={{ marginTop: "15px" }}
          className="nice-button"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          autoComplete="off"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
