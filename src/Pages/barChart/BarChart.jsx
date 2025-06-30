<<<<<<< HEAD
import { Box } from '@mui/material'
import React from 'react'
import Bar from './Bar'
import { ResponsiveBar } from '@nivo/bar'
import Header from '../../components/Header/Header'

const BarChart = () => {
 
  return (
    <Box className='container'>
      <Header title={'BarChart'} subTitle={'Simple BarChart Chart'} />
      <Bar/>
    </Box>
  )
}

export default BarChart
=======
import { Box } from "@mui/material";
import React from "react";
import Bar from "./Bar";
import { ResponsiveBar } from "@nivo/bar";
import Header from "../../components/Header/Header";

const BarChart = () => {
  return (
    <Box
      className="container"
      mt={{ xs: 10,}}
      ml={{ xs: 10, sm:13 }}
      width={{ xs: "307px", sm: "auto" }}
    >
      <Header title={"BarChart"} subTitle={"Simple BarChart Chart"} />
      <Bar />
    </Box>
  );
};

export default BarChart;
>>>>>>> 049d23a (second device)
