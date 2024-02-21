import { Box, Container, Hidden } from "@mui/material";

import Sidebar, { SidebarMobile } from "./Sidebar";
import React, { useEffect, useState } from "react";
import Dashboard from "../../pages/Dashboard";
import State from "../../hooks/state";
import Application from "../../pages/Application";
import Department from "../../pages/Department";
import Students from "../../pages/Students";

const MainBoard = () => {

  const {option} = State.optionStore();

  const [page, setPage] = useState<React.ReactElement>(<Dashboard/>)


  useEffect(() => {

    switch(option) {
      case 1:
        setPage(<Dashboard/>)
        break;
      
      case 2:
        setPage(<Application/>)
        break;
        
      case 3:
        setPage(<Department/>)
        break;

      case 4:
        setPage(<Students/>)
        break;

      default :

      setPage(<Dashboard/>)
      break;
    }
    
  },[option]);

  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{
        width: "100%",
        height: "100%",

        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
      }}
    >
      <Hidden lgDown>
        <Box width={"15%"}>
          <Sidebar />
        </Box>
      </Hidden>

      <Hidden lgUp>
        <Box width={"80px"}>
          <SidebarMobile />
        </Box>
      </Hidden>

      <Box
        width={"100%"}
        sx={{ backgroundColor: "#D7E4C0", overflow: "auto", maxHeight: "100%" }}
      >

        {page}
       
      </Box>

      {/* <Sidebar/> */}
    </Container>
  );
};

export default MainBoard;
