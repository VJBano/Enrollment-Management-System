import { Box, Container, Hidden } from "@mui/material";
import BarGraph from "../components/dashboard/BarGraph";
import PendingApplication from "../components/dashboard/PendingApplication";
import PieGraph from "../components/dashboard/PieGraph";

const Dashboard = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{
        width: "100%",
        height: "100%",

        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 3,
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Box sx={{ width: "400px" }}>
          <PieGraph />
        </Box>

        <Hidden lgDown>
          <Box sx={{ width: "590px" }}>
            <BarGraph />
          </Box>
        </Hidden>

        <Hidden lgDown>
          <Box sx={{ width: "580px" }}>
            <PendingApplication />
          </Box>
        </Hidden>
      </Box>
    </Container>
  );
};

export default Dashboard;
