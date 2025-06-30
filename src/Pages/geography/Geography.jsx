<<<<<<< HEAD
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
=======
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import Geo from "./Geo";
const Geography = () => {
  return (
    <Box
      className="container"
      mt={{ xs: 10 }}
      ml={{ xs: 10, sm: 13 }}
      width={{ xs: "307px", sm: "auto" }}
    >
      <Header title={"Geography"} subTitle={"Simple Geography Chart"} />
      <Geo />
    </Box>
  );
};

export default Geography;
>>>>>>> 049d23a (second device)
