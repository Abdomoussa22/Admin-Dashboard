import { Box, Button } from '@mui/material'
import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { DownloadOutlined } from "@mui/icons-material";
import Header from '../../components/Header/Header'
const Dashboard = () => {
  return (

    <Box sx={{mt : {xs : 10 }}} className="container">

      <Box sx={{display:'flex', justifyContent:'space-between' , alignItems : 'center'}}>

      <Header title={"Dashboard"} subTitle={"Welcome to your dashboard"} />
      <Box sx={{ textAlign: 'right' }}>

        <Button variant='contained' color='primary' sx={{ fontSize:{xs :'11px' ,sm :'15px'} ,textTransform: 'capitalize', padding:{xs:'2px 4px', lg:'4px 8px' }}} >
          <DownloadOutlined sx={{ fontSize:{xs :'15px' , lg : '20px'}}} />

          Download Reports
        </Button>
      </Box>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  )
}

export default Dashboard