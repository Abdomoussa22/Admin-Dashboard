import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { rows } from './data';
import {
    AdminPanelSettingsOutlined,
    LockOpenOutlined,
    SecurityOutlined,
} from "@mui/icons-material";
import Header from '../../components/Header/Header';
const Team = () => {
    const theme = useTheme()
    const columns = [
        { field: 'id', headerName: 'ID', width: 33, align: "center", headerAlign: 'center' },
        { field: 'name', headerName: 'Name', flex: 1, align: "center", headerAlign: 'center' },
        { field: 'email', headerName: 'Email', flex: 1, align: "center", headerAlign: 'center' },
        { field: 'age', headerName: 'Age', align: "center", headerAlign: 'center' },
        { field: 'phone', headerName: 'Phone', flex: 1, align: "center", headerAlign: 'center' },
        {
            field: 'access', headerName: 'Access', flex: 1, align: "center", headerAlign: 'center',
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        sx={{
                            background: access === 'Admin' ? theme.palette.primary.dark : access === 'Manager' ? theme.palette.secondary.main : " #3da58a",
                            p:{xs : '3px' , sm :'5px'},
                            width:{xs : '50px' , sm :'99px'},
                            margin: '7px auto',
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            borderRadius: '3px'
                 
                        }}>
                        {access === "Admin" && < AdminPanelSettingsOutlined sx={{fontSize:{xs : '15px' , sm :'small'} , color: '#fff' }} />}
                        {access === "Manager" && < SecurityOutlined  color='inherit' sx={{fontSize:{xs : '15px' , sm :'small'}, color: '#fff' }} />}
                        {access === "User" && < LockOpenOutlined  color='inherit' sx={{fontSize:{xs : '15px' , sm :'small'}, color: '#fff' }} />}
                        <Typography sx={{ fontSize:{xs : '15px' , sm :'small'} , color: '#fff' }}>{access}</Typography>

                    </Box>
                )
            }
        },
    ];
    return (
        <Box mt={{xs:10}} ml={{xs :11 , sm:15}} width={{xs:'307px' , sm:'90%'}} className="container">
            <Header title={"Time"} subTitle={"Managing the Team Members"}/>
            <div style={{ height: '100vh', width: '97%' }}>
                <DataGrid rows={rows} 
// @ts-ignore
                columns={columns} />
            </div>
        </Box>
    )
}

export default Team