import { Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

const Header = ({ title, subTitle }) => {
    const theme = useTheme()
    return (
<<<<<<< HEAD
        <Stack direction={'column'} gap={1} mb={2}>
            <Typography sx={{ color: `${theme.palette.primary.main}`, fontSize: '25px', fontWeight: 'bold' }}>{title}</Typography>
            <Typography sx={{ color: `${theme.palette.text.primary}`, fontSize: '17px' }}>{subTitle} </Typography>
=======
        <Stack direction={'column'} gap={1} mb={2} ml={{xs :5}}>
            <Typography sx={{ color: `${theme.palette.primary.main}`, fontSize:{xs :'18px', lg :'25px'}, fontWeight: 'bold' }}>{title}</Typography>
            <Typography sx={{ color: `${theme.palette.text.primary}`, fontSize:{xs :'14px', lg :'17'} }}>{subTitle} </Typography>
>>>>>>> 049d23a (second device)
        </Stack>
    )
}

export default Header