import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Line from "../../Pages/lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import React from "react";
import { Transactions } from "./data";
const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack
      ml={{ xs: 7, sm: "auto" }}
      width={{ xs: "307px", sm: "auto" }}
      mt={2}
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
    >
      <Paper
        sx={{
          height: "360px",
          width: 600,
          maxWidth: 900,
          flexGrow: 1,
          p: "15px",
        }}
      >
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <DownloadOutlined fontSize="large" />
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>

      <Box
        sx={{
          minWidth: { xs: "auto", sm: "350px" },
          flexGrow: 1,
          maxHeight: "360px",
          overflow: "auto",
        }}
      >
        <Paper>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            p={1.2}
            color={theme.palette.secondary.main}
          >
            Revenue Generated
          </Typography>
        </Paper>
        {Transactions.map((item) => (
          <Paper
            sx={{
              mt: 0.4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: "7px",
            }}
          >
            <Box p={1.2}>
              <Typography variant="body1">{item.txId}</Typography>
              <Typography variant="body2">{item.user} </Typography>
            </Box>
            <Typography variant="body1">{item.date} </Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              color={theme.palette.getContrastText(theme.palette.error.main)}
              variant="body2"
            >
              ${item.cost}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Stack>
  );
};

export default Row2;
