import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Hidden,
  
  IconButton,
  
  Menu,
  
  MenuItem,
  Typography,
  
 
} from "@mui/material";
import logo from "../../assets/logo.png";
import Image from "../Image";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutIcon from "@mui/icons-material/Logout";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import Logout from "../modals/Logout";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [logout, setLogout] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ display: "flex", height: "60px" }}
    >
      <Logout isOpen={logout} handleClose={setLogout} />
      <Grid
        item
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        alignContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#070F2B", padding: 1 }}
      >

        <Box display={"flex"} alignItems={"center"} gap={1}>
        <Image image={logo} height={50} width={50} />
        <Typography variant="h6" color={"white"}>Admin</Typography>
        </Box>
        

        <Box sx={{ width: "50%" }}>
          <Marquee style={{ color: "white" }}>
            Announcement for new Applicant
          </Marquee>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
          }}
          height={"100%"}
        >
          <Hidden lgDown>
          
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>
                  <Badge badgeContent={4} color="warning">
                    <NotificationsActiveIcon sx={{ color: "white" }} />
                  </Badge>
                </Button>
                <Button><SettingsIcon sx={{ color: "white" }} /></Button>
                <Button onClick={() => setLogout(true)}> <LogoutIcon sx={{ color: "white" }} /></Button>
              </ButtonGroup>

            
          </Hidden>

          <Hidden lgUp>

          <IconButton
                  sx={{ color: "black" }}
                  edge="start"
                  aria-label="menu"
                  onClick={handleClickMenu}
                >
                  <MenuIcon sx={{ color:"white"}}/>
                </IconButton>
            

            <Menu
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={handleCloseMenu}
              >
                <MenuItem>Notification</MenuItem>
                <MenuItem>Setting</MenuItem>
                <MenuItem onClick={() => setLogout(true)}>Logout</MenuItem>
              </Menu>
          </Hidden>
        </Box>
      </Grid>
    </Container>
  );
};

export default Header;
