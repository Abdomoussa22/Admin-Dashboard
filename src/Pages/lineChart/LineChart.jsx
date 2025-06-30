<<<<<<< HEAD
import React from 'react'
import { Box} from '@mui/material'
import Line from './Line'
import Header from '../../components/Header/Header'


const LineChart = () => {
    return (
        <Box className='container'>
              <Header title={'LineChart'} subTitle={'Simple LineChart Chart'} />
            <Line/>
        </Box>
    )
}

export default LineChart
=======
import React from "react";
import { Box } from "@mui/material";
import Line from "./Line";
import Header from "../../components/Header/Header";

const LineChart = () => {
  return (
    <Box
      className="container"
      mt={{ xs: 10,}}
      ml={{ xs: 10, sm:13 }}
      width={{ xs: "307px", sm: "auto" }}
    >
      <Header title={"LineChart"} subTitle={"Simple LineChart Chart"} />
      <Line />
    </Box>
  );
};

export default LineChart;
>>>>>>> 049d23a (second device)
