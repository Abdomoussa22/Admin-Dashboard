import React from "react";
import { Box } from "@mui/material";
import Pie from "./Pie";
import Header from "../../components/Header/Header";

const PieChart = () => {
  return (
    <Box
      mt={{ xs: 10 }}
      ml={{ xs: 10, sm: 13 }}
      width={{ xs: "307px", sm: "auto" }}
      className="container"
    >
      <Header title={"PieChart"} subTitle={"Simple PieChart Chart"} />
      <Pie />
    </Box>
  );
};

export default PieChart;
