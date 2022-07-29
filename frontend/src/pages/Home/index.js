import StickyHeadTable from "../../components/ListTable";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Box from "@mui/material/Box";
// import AddForm from "../../components/AddForm";
import TimeTable from "../../components/TimeTable";
import ScoreInputTable from "../../components/ScoreInputTable";
function Home() {
  return (
    <Box>
      <Header />
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection:"column",
          marginTop: "64px",
          marginLeft: "240px",
        }}
      >
        <StickyHeadTable sx={{ flexGrow: 1 }} />
        {/* <AddForm /> */}
        <TimeTable />
        <ScoreInputTable />
      </Box>
    </Box>
  );
}

export default Home;
