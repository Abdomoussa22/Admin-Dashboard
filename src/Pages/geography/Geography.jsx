import { Box } from '@mui/material'
import Header from '../../components/Header/Header'
import Geo from './Geo'
const Geography = () => {
    return (
        <Box className='container'>
            <Header title={'Geography'} subTitle={'Simple Geography Chart'} />
          <Geo/>
        </Box>
    )
}

export default Geography
