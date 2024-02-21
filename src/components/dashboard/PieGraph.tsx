import { Container, Typography } from "@mui/material";

import { PieChart } from "@mui/x-charts/PieChart";

const PieGraph = () => {
  const data = [
    { id: 0, value: 10, label: "Enrolled" },
    { id: 1, value: 15, label: "Drop-out" },
    { id: 2, value: 20, label: "Graduates" },
  ];

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "#CCD3CA",
        borderRadius: 2,
        width: "100%",
        height: "300px",
        display: "flex",
        alignItems: "center",
        flexDirection:"column"
      }}
    >
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
      />

      <Typography>SY {new Date().getFullYear()-1} - {new Date().getFullYear()}</Typography>
    </Container>
  );
};

export default PieGraph;
