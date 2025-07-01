import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../Pages/pieChart/Pie";
import React from "react";
import Bar from "../../Pages/barChart/Bar";
import Geo from "../../Pages/geography/Geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack
      ml={{ xs: 7, sm: "auto" }}
      width={{ xs: "307px", sm: "auto" }}
      mt={3}
      gap={1}
      direction={{ xs: "column", sm: "row" }}
      flexWrap={"wrap"}
    >
      <Paper
        sx={{
          width: { xs: "100%", sm: "33%" },
          minWidth: { xs: "auto", sm: "350px" },
          flexGrow: 1,
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          width: { xs: "100%", sm: "33%" },
          minWidth: { xs: "auto", sm: "350px" },
          flexGrow: 1,
        }}
      >
        <Bar isDashboard={true} />
      </Paper>
      <Paper
        sx={{
          width: { xs: "100%", sm: "33%" },
          minWidth: { xs: "auto", sm: "350px" },
          flexGrow: 1,
        }}
      >
        <Geo isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
