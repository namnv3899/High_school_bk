import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
let TeacherList = [];
const subjects = [
  "Chủ nhiệm",
  "Toán học",
  "Ngữ văn",
  "Ngoại ngữ",
  "Vật lý",
  "Hóa học",
  "Sinh học",
  "Lịch sử",
  "Địa lý",
  "GDCD",
  "Tin học",
  "Công nghệ",
  "Thể dục",
];

export default function TeacherAssign({ classId, close }) {
  const [teachers, setTeachers] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:6969/api/teacher",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      TeacherList = res.data.data.data;
      console.log("TeacherList: ", TeacherList);
      axios({
        method: "get",
        url: "http://localhost:6969/api/class/classTeacher/" + classId,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((response) => {
        let classTeachers = response.data.data;
        console.log("classTeachers : ", classTeachers )
        let _teachers = {};
        if(Object.keys(classTeachers).length > 0) 
          for (const item in classTeachers){
              _teachers[classTeachers[item].subject] = classTeachers[item].teacherId;
          }
        console.log("Teachers: ", _teachers);
        setTeachers(_teachers);
        setPrimary(_teachers.chuNhiem);
        setMath(_teachers.toanHoc);
        setLiterature(_teachers.nguVan);
        setEnglish(_teachers.ngoaiNgu);
        setPhysics(_teachers.vatLy);
        setChemistry(_teachers.hoaHoc);
        setBiology(_teachers.sinhHoc);
        setHistory(_teachers.lichSu);
        setGeography(_teachers.diaLy);
        setCivic(_teachers.gdcd);
        setIT(_teachers.tinHoc);
        setScience(_teachers.congNghe);
        setPhysical(_teachers.theDuc);
      });
    });
  }, []);

  const [primary, setPrimary] = React.useState(
    teachers !== "" ? teachers.chuNhiem : ""
  );
  const [math, setMath] = React.useState(
    teachers !== "" ? teachers.toanHoc : ""
  );
  const [literature, setLiterature] = React.useState(
    teachers !== "" ? teachers.nguVan : ""
  );
  const [english, setEnglish] = React.useState(
    teachers !== "" ? teachers.ngoaiNgu : ""
  );
  const [physics, setPhysics] = React.useState(
    teachers !== "" ? teachers.vatLy : ""
  );
  const [chemistry, setChemistry] = React.useState(
    teachers !== "" ? teachers.hoaHoc : ""
  );
  const [biology, setBiology] = React.useState(
    teachers !== "" ? teachers.sinhHoc : ""
  );
  const [history, setHistory] = React.useState(
    teachers !== "" ? teachers.lichSu : ""
  );
  const [geography, setGeography] = React.useState(
    teachers !== "" ? teachers.diaLy : ""
  );
  const [civic, setCivic] = React.useState(
    teachers !== "" ? teachers.gdcd : ""
  );
  const [it, setIT] = React.useState(teachers !== "" ? teachers.tinHoc : "");
  const [science, setScience] = React.useState(
    teachers !== "" ? teachers.congNghe : ""
  );
  const [physical, setPhysical] = React.useState(
    teachers !== "" ? teachers.theDuc : ""
  );
  const value = (item) => {
    switch (item) {
      case "Chủ nhiệm":
        return primary;
      case "Toán học":
        return math;
      case "Ngữ văn":
        return literature;
      case "Ngoại ngữ":
        return english;
      case "Vật lý":
        return physics;
      case "Hóa học":
        return chemistry;
      case "Sinh học":
        return biology;
      case "Lịch sử":
        return history;
      case "Địa lý":
        return geography;
      case "GDCD":
        return civic;
      case "Tin học":
        return it;
      case "Công nghệ":
        return science;
      case "Thể dục":
        return physical;
      default:
        break;
    }
  };
  const handleChange = (event) => {
    switch (event.target.name) {
      case "Chủ nhiệm":
        setPrimary(event.target.value);
        break;
      case "Toán học":
        setMath(event.target.value);
        break;
      case "Ngữ văn":
        setLiterature(event.target.value);
        break;
      case "Ngoại ngữ":
        setEnglish(event.target.value);
        break;
      case "Vật lý":
        setPhysics(event.target.value);
        break;
      case "Hóa học":
        setChemistry(event.target.value);
        break;
      case "Sinh học":
        setBiology(event.target.value);
        break;
      case "Lịch sử":
        setHistory(event.target.value);
        break;
      case "Địa lý":
        setGeography(event.target.value);
        break;
      case "GDCD":
        setCivic(event.target.value);
        break;
      case "Tin học":
        setIT(event.target.value);
        break;
      case "Công nghệ":
        setScience(event.target.value);
        break;
      case "Thể dục":
        setPhysical(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let o = {
      chuNhiem: {
        teacherId: primary,
        classId: classId,
      },
      toanHoc: {
        teacherId: math,
        classId: classId,
      },
      nguVan: {
        teacherId: literature,
        classId: classId,
      },
      ngoaiNgu: {
        teacherId: english,
        classId: classId,
      },
      sinhHoc: {
        teacherId: biology,
        classId: classId,
      },
      lichSu: {
        teacherId: history,
        classId: classId,
      },
      diaLy: {
        teacherId: geography,
        classId: classId,
      },
      gdcd: {
        teacherId: civic,
        classId: classId,
      },
      theDuc: {
        teacherId: physical,
        classId: classId,
      },
      vatLy: {
        teacherId: physics,
        classId: classId,
      },
      hoaHoc: {
        teacherId: chemistry,
        classId: classId,
      },
      tinHoc: {
        teacherId: it,
        classId: classId,
      },
      congNghe: {
        teacherId: science,
        classId: classId,
      },
    };
    console.log(o)

      axios({
        method : 'post',
        url : "http://localhost:6969/api/class/assignClassTeacher",
        headers : {
          "Authorization" : localStorage.getItem("token"),
        },
        data : o
      }).then(() => {
        close();
      });
  };
  return (
    <Box
    component="form"
    onSubmit={handleSubmit}
    noValidate
    autoComplete="off"
    >
      <Box
        autoComplete="off"
        sx={{
          minWidth: 500,
          display: "grid",
          gridTemplateColumns: "repeat(2, 400px)",
        }}
      >
        {subjects.map((item, index) => (
          <section>
            <InputLabel>{item}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value(item)}
              // label="Age"
              name={item}
              onChange={handleChange}
              sx={{ width: "200px", marginLeft: "100px" }}
            >
              {TeacherList.filter(
                (teacher) =>
                  (item !== "Chủ nhiệm" && teacher.subject == item) ||
                  item === "Chủ nhiệm"
              ).map((teacher) => (
                <MenuItem value={teacher.id}>{teacher.name}</MenuItem>
              ))}
            </Select>
          </section>
        ))}
      </Box>
      <div style={{ margin: "20px", marginLeft: "250px" }}>
        <Button
          type="submit"
          variant="outlined"
          size="small"
          sx={{ height: "40px", width: "120px", margin: "10px" }}
        >
          Lưu
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ height: "40px", width: "120px" }}
          onClick={() => close()}
        >
          Hủy
        </Button>
      </div>
    </Box>
  );
}
