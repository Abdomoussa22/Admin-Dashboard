import { Paper, Stack, Typography, useTheme } from '@mui/material'
import Pie from '../../Pages/pieChart/Pie'
import React from 'react'
import Bar from '../../Pages/barChart/Bar'
import Geo from '../../Pages/geography/Geo'

const Row3 = () => {
  const theme = useTheme()
  return (
    <Stack mt={3} gap={1} direction={"row"} flexWrap={"wrap"}>
      <Paper sx={{width:"30%", minWidth : "350px" , flexGrow:1}}>
              <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <Pie isDashboard = {true}/>
          <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{width:"33%", minWidth : "350px" , flexGrow:1}}>
       <Bar  isDashboard = {true}/>
        </Paper>
      <Paper sx={{width:"33%", minWidth : "350px" , flexGrow:1}}>
        <Geo isDashboard = {true}/>
      </Paper>
    </Stack>
  )
}

export default Row3