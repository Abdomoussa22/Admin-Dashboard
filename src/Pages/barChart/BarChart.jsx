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
