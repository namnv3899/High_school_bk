import * as React from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HikingIcon from "@mui/icons-material/Hiking";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import ScoreIcon from "@mui/icons-material/Score";
import TableViewIcon from "@mui/icons-material/TableView";
import ClassIcon from "@mui/icons-material/Class";
import PasswordIcon from "@mui/icons-material/Password";
import InboxIcon from "@mui/icons-material/Inbox";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import StudentManage from "./StudentManage"
import TeacherManage from "./TeacherManage";
import AccountantManage from "./AccountantManage";
import FacilityManage from "./FacilityManage";
import ScoreInputTable from "./ScoreInputTable";
import ClassManage from "./ClassManage";
import TeacherAccountantInfo from "./TeacherAccountantInfo";
import StudentInfo from "./StudentInfo";
import ChangePassword from "./ChangePassword";
import ScheduleTeacherStudent from "./ScheduleTeacherStudent";
import StudentScoreTable from "./StudentScoreTable";
import SalaryManager from "./SalaryManage";
import ClassScoresPrimaryTeacher from "./ClassScoresPrimaryTeacher";
const drawerWidth = 240;
const adminSidebar = [
  {
    id: 0,
    label: "Quản lý kế toán",
    link: <AccountantManage/>,
    icon: MenuBookIcon,
  },
  {
    id: 1,
    label: "Quản lý học sinh",
    link: <StudentManage/>,
    icon: HikingIcon,
  },
  {
    id: 2,
    label: "Quản lý giáo viên",
    link: <TeacherManage/>,
    icon: SchoolIcon,
  },
  {
    id: 3,
    label: "Quản lý cơ sở vật chất",
    link: <FacilityManage/>,
    icon: ChairAltIcon,
  },
  {
    id: 4,
    label: "Quản lý lớp học",
    link: <ClassManage/>,
    icon: ClassIcon,
  }
];
const studentSidebar = [
  {
    id: 0,
    label: "Thông tin cá nhân",
    link: <StudentInfo/>,
    icon: InfoIcon,
  },
  {
    id: 1,
    label: "Thời khóa biểu",
    link: <ScheduleTeacherStudent/>,
    icon: TableViewIcon,
  },
  {
    id: 2,
    label: "Kết quả học tập",
    link: <StudentScoreTable/>,
    icon: ScoreIcon,
  },
  {
    id: 3,
    label: "Đổi mật khẩu",
    link: <ChangePassword/>,
    icon: PasswordIcon,
  },
];
const teacherSidebar = [
  {
    id: 0,
    label: "Thông tin cá nhân",
    link: <TeacherAccountantInfo/>,
    icon: InfoIcon,
  },
  {
    id: 1,
    label: "Thời khóa biểu",
    link: <ScheduleTeacherStudent/>,
    icon: TableViewIcon,
  },
  {
    id: 2,
    label: "Nhập điểm môn học",
    link: <ScoreInputTable/>,
    icon: ScoreIcon,
  },
  {
    id: 3,
    label: "Xem điểm lớp chủ nhiệm",
    link: <ClassScoresPrimaryTeacher/>,
    icon: ScoreIcon,
  },
  {
    id: 4,
    label: "Đổi mật khẩu",
    link: <ChangePassword/>,
    icon: PasswordIcon,
  },
];
const accountantSidebar = [
  {
    id: 0,
    label: "Thông tin cá nhân",
    link: <TeacherAccountantInfo/>,
    icon: InfoIcon,
  },
  {
    id: 1,
    label: "Quản lý lương",
    link: <SalaryManager/>,
    icon: LocalAtmIcon,
  },
  {
    id: 3,
    label: "Đổi mật khẩu",
    link: <ChangePassword/>,
    icon: PasswordIcon,
  },
];
export default function Sidebar({setContent}) {
  const { user, setUser } = React.useContext(UserContext);
  var sideBarContent;
  if (user) {
    switch (user.role) {
      case "Teacher": {
        sideBarContent = teacherSidebar;
        break;
      }
      case "Student": {
        sideBarContent = studentSidebar;
        break;
      }
      case "Admin": {
        sideBarContent = adminSidebar;
        break;
      }
      case "Parent": {
        sideBarContent = studentSidebar.slice(0, studentSidebar.length - 1);
        break;
      }
      case "Accountant": {
        sideBarContent = accountantSidebar;
        break;
      }
      default:
        break;
    }
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {sideBarContent.map((text, index) => (
              <React.Fragment key={index}>
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={()=>{setContent(text.link)}}>
                    <ListItemIcon>{<text.icon/>}</ListItemIcon>
                    <ListItemText primary={text.label} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
