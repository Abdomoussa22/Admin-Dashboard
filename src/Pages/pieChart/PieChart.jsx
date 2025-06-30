<<<<<<< HEAD
import React from 'react'
import { Box } from '@mui/material'
import Pie from './Pie'
import Header from '../../components/Header/Header'

const PieChart = () => {
 
    return (
        <Box className='container'>
            <Header title={'PieChart'} subTitle={'Simple PieChart Chart'} />
          <Pie/>
        </Box>
    )
}

export default PieChart
=======
import React from "react";
import { Box } from "@mui/material";
import Pie from "./Pie";
import Header from "../../components/Header/Header";

const PieChart = () => {
  return (
    <Box
      className="container"
      mt={{ xs: 10 }}
      ml={{ xs: 10, sm: 13 }}
      width={{ xs: "307px", sm: "auto" }}
    >
      <Header title={"PieChart"} subTitle={"Simple PieChart Chart"} />
      <Pie />
    </Box>
  );
};

export default PieChart;
>>>>>>> 049d23a (second device)
