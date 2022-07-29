import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";

export default function TeacherAccountantInfo() {
  const [info, setInfo] = useState(
    {
      name : "",
      dateOfBirth : "",
      sex : "",
      email : "",
      phone : "",
      address : "",
      startWorking : ""
    }
  );
  useEffect( () => {
    if(JSON.parse(localStorage.getItem('user')).role == "Teacher")
    axios({
      method : 'get',
      url : "http://localhost:6969/api/teacher",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      }
    }).then((res) => setInfo(res.data.data.data.filter( item => item.username === JSON.parse(localStorage.getItem('user')).username)[0]));
    else
    axios({
      method : 'get',
      url : "http://localhost:6969/api/accountant",
      headers : {
        "Authorization" : localStorage.getItem("token"),
      }
    }).then((res) => setInfo(res.data.data.data.filter( item => item.username === JSON.parse(localStorage.getItem('user')).username)[0]));
  }, []);
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "500px" },
        width : "600px",
        margin : "10px"
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{display : "flex", justifyContent : "flex-start"}}>
        <Typography variant = "h5" component="h5" sx = {{width : "200px"}}>
            Họ và tên
        </Typography>
        <Typography variant = "h5" component="h5">
            : {info.name}
        </Typography>
      </div>

      <div style={{display : "flex", justifyContent : "flex-start"}}>
        <Typography variant = "h5" component="h5" sx = {{width : "200px"}}>
            Ngày sinh
        </Typography>
        <Typography variant = "h5" component="h5">
            : {info.dateOfBirth}
        </Typography>
      </div>

      <div style={{display : "flex", justifyContent : "flex-start"}}>
        <Typography variant = "h5" component="h5" sx = {{width : "200px"}}>
            Giới tính
        </Typography>
        <Typography variant = "h5" component="h5">
            : {info.sex}
        </Typography>
      </div>

      <div style={{display : "flex", justifyContent : "flex-start"}}>
        <Typography variant = "h5" component="h5" sx = {{width : "200px"}}>
            Email
        </Typography>
        <Typography variant = "h5" component="h5">
            : {info.email}
        </Typography>
      </div>

      <div style={{display : "flex", justifyContent : "flex-start"}}>
        <Typography variant = "h5" component="h5" sx = {{width : "200px"}}>
            Số điện thoại
        </Typography>
        <Typography variant = "h5" component="h5">
            : {info.phone}
        </Typography>
      </div>

      <div style={{display : "flex", justifyContent : "flex-start"}}>
        <Typography variant = "h5" component="h5" sx = {{width : "200px"}}>
            Địa chỉ
        </Typography>
        <Typography variant = "h5" component="h5">
            : {info.address}
        </Typography>
      </div>

      <div style={{display : "flex", justifyContent : "flex-start"}}>
        <Typography variant = "h5" component="h5" sx = {{width : "200px"}}>
            Ngày bắt đầu làm việc
        </Typography>
        <Typography variant = "h5" component="h5">
            : {info.startWorking}
        </Typography>
      </div>

      {JSON.parse(localStorage.getItem('user')).role == "Teacher" && 
        <div style={{display : "flex", justifyContent : "flex-start"}}>
        <Typography variant = "h5" component="h5" sx = {{width : "200px"}}>
            Môn dạy
        </Typography>
        <Typography variant = "h5" component="h5">
            : {info.subject}
        </Typography>
      </div>
      }
    </Box>
  );
}