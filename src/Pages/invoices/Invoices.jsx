import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { rows } from './data'
import { columns } from './data'
import Header from '../../components/Header/Header'

const Invoices = () => {
    return (

        <Box className="container">
            <Header title={"Invoices"} subTitle={"List of Invoice Balances"}/>
            <div style={{ height: '100vh', width: '100%' }}>

                <DataGrid checkboxSelection
                    rows={rows}
                    // @ts-ignore
                    columns={columns} />
            </div>
        </Box>
    )
}

export default Invoices