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
// import axios from "axios";
// import jwtDecode from "jwt-decode";
import { UserContext } from "../context/UserContext";
import axios from "axios";
function ChangePassword() {
  const { user, setUser } = React.useContext(UserContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  const navigate = useNavigate();
  const handleOnChange = (event, type) => {
    switch (type) {
      case "old-password": {
        setOldPassword(event.target.value);
        break;
      }
      case "new-password": {
        setNewPassword(event.target.value);
        break;
      }
      case "repeat-new-password": {
        setRepeatNewPassword(event.target.value);
        break;
      }
      default: {
        break;
      }
    }
  };
  // Connect db
  const handeSubmit = async (event) => {
    event.preventDefault();
    //     userContext.setUser(prev => (
    //     {
    //       username,
    //       password,
    //       role
    //     }
    //   ));
    if (
      newPassword === repeatNewPassword &&
      newPassword !== oldPassword &&
      oldPassword === user.password
    ) {
      let info;
      if (JSON.parse(localStorage.getItem("user")).role == "Teacher")
        axios({
          method: "get",
          url: "http://localhost:6969/api/teacher",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }).then((res) => {
          info = res.data.data.data.filter(
            (item) =>
              item.username ===
              JSON.parse(localStorage.getItem("user")).username
          )[0];

          axios({
            method: "patch",
            url: "http://localhost:6969/api/teacher/" + info.id,
            headers: {
              Authorization: localStorage.getItem("token"),
            },
            data: { ...info, password: newPassword },
          }).then(() => {
            navigate("/login");
          });
        });
      else if (JSON.parse(localStorage.getItem("user")).role == "Accoutant")
      axios({
        method: "get",
        url: "http://localhost:6969/api/accountant",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((res) => {
        info = res.data.data.data.filter(
          (item) =>
            item.username ===
            JSON.parse(localStorage.getItem("user")).username
        )[0];
        
        axios({
          method: "patch",
          url: "http://localhost:6969/api/accountant/" + info.id,
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          data: { ...info, password: newPassword },
        }).then(() => {
          navigate("/login");
        });
      });
      else 
      axios({
        method: "get",
        url: "http://localhost:6969/api/student",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((res) => {
        info = res.data.data.data.filter(
          (item) =>
            item.username ===
            JSON.parse(localStorage.getItem("user")).username
        )[0];
        
        axios({
          method: "patch",
          url: "http://localhost:6969/api/student/" + info.id,
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          data: { ...info, password: newPassword },
        }).then(() => {
          navigate("/login");
        });
      });

      setNewPassword("");
      setOldPassword("");
      setRepeatNewPassword("");
    } else {
      alert("Vui l??ng ki???m tra l???i");
    }
  };
  return (
    <div style={{ width: "500px", margin: "auto", marginTop: "20px" }}>
      <div style={{ fontSize: "28px" }}>?????i m???t kh???u</div>
      <form onSubmit={handeSubmit}>
        <TextField
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          id="old-password"
          value={oldPassword}
          label="M???t kh???u c??"
          name="old-password"
          autoComplete="off"
          required
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
        <TextField
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          id="new-password"
          value={newPassword}
          label="M???t kh???u m???i"
          name="new-password"
          autoComplete="off"
          required
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
        <TextField
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          id="repeat-new-password"
          value={repeatNewPassword}
          label="Nh???p l???i m???t kh???u"
          name="repeat-new-password"
          autoComplete="off"
          required
          onChange={(e) => {
            handleOnChange(e, e.target.name);
          }}
        />
        <Button
          style={{ marginTop: "15px" }}
          className="nice-button"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          autoComplete="off"
        >
          ?????i m???t kh???u
        </Button>
      </form>
    </div>
  );
}

export default ChangePassword;
