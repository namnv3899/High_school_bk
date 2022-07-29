import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
// import AddForm from "../components/AddForm";
import TimeTable from "../components/TimeTable";
import React, { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import ListTable from "../components/ListTable"
import ScoreInputTable from "../components/ScoreInputTable";
import AddClassForm from "../components/AddClassForm";
import { useNavigate } from "react-router-dom";

// userContext.user.role
export default function GeneralLayout() {
  const [Content, setContent] = useState(
  <img src="https://hust.media/img/hero-img.png"
    // style = {{width:"700px", height:"394px"}}
  />
    );
  const navigate = useNavigate();
  const userContext = React.useContext(UserContext);

  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate('/login');
    }else{
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      userContext.setUser(user);
    }
  },[]);
  if(!localStorage.getItem("token")){
    return;
  }
  return (
    userContext.user.role !== "" ? <Box>
      <Header/>
      <Sidebar setContent={setContent} /> {/* Sidebar */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          marginTop: "64px",
          marginLeft: "240px",
          paddingTop : "2px",
          paddingLeft : "5px",
          justifyContent : "center"
        }}
      >
        {Content}
        {/* <StickyHeadTable sx={{ flexGrow: 1 }} />
        <AddForm />
        <TimeTable />
        <ScoreInputTable /> */}
      </Box>
    </Box>:<></>
  );
}

