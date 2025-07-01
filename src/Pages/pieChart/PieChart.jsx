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
