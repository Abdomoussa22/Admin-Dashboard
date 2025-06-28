import { Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

const Header = ({ title, subTitle }) => {
    const theme = useTheme()
    return (
        <Stack direction={'column'} gap={1} mb={2}>
            <Typography sx={{ color: `${theme.palette.primary.main}`, fontSize: '25px', fontWeight: 'bold' }}>{title}</Typography>
            <Typography sx={{ color: `${theme.palette.text.primary}`, fontSize: '17px' }}>{subTitle} </Typography>
        </Stack>
    )
}

export default Header