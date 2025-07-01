import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import Geo from "./Geo";
const Geography = () => {
  return (
    <Box 
       mt={{ xs: 10 }}
      ml={{ xs: 10, sm: 13 }}
      width={{ xs: "307px", sm: "auto" }}
    className="container">
      <Header title={"Geography"} subTitle={"Simple Geography Chart"} />
      <Geo />
    </Box>
  );
};

export default Geography;
