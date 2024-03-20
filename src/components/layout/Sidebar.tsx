import {
  Container,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import List from "@mui/material/List";
import { SyntheticEvent } from "react";
import State from "../../hooks/state";
import SchoolIcon from '@mui/icons-material/School';

const sidebarOptions = [
  { id: 1, title: "Dashboard", icon: <DashboardIcon /> },
  { id: 2, title: "Application", icon: <DynamicFormIcon /> },
  { id: 3, title: "Department", icon: <MapsHomeWorkIcon /> },
  { id: 4, title: "Students", icon: <PeopleAltIcon /> },
  { id: 5, title: "Course", icon: <SchoolIcon /> },
  
];

const Sidebar = () => {

  const {setOption, option} = State.optionStore();
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    
    setOption(index);

  };


  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "start",
        alignItems: "start",
        backgroundColor:"background.paper"
      }}
    >
      <List sx={{ width: "100%", paddingTop: 1, }}>
        {sidebarOptions.map((opt) => {
          return (
            <ListItemButton
            
              selected={option === opt.id}
              onClick={(e) => handleListItemClick(e, opt.id)}
              sx={{
                // margin: 1,
                // "&.Mui-selected": {
                //   backgroundColor: "#02A7DD",
                // },
                // "&:hover": {
                //   backgroundColor: "#86B6F6",
                // },
                // "&.Mui-selected:hover": {
                //     backgroundColor: "#02A7DD",
                //   },
              }}
              key={opt.id}
            >
              <ListItemIcon>{opt.icon}</ListItemIcon>

              <ListItemText
                sx={{
                  "&.Mui-selected": {
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                  },
                }}
                primary={opt.title}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Container>
  );
};

export const SidebarMobile = () => {

  const {setOption, option} = State.optionStore();
  const handleListItemClick = (event: SyntheticEvent, index: number) => {
    event.preventDefault();
    setOption(index);
  };
  console.log(option);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "70px",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <List sx={{ width: "100%", paddingTop: 1 }}>
        {sidebarOptions.map((opt) => {
          return (
            <ListItemButton
              selected={option === opt.id}
              onClick={(e) => handleListItemClick(e, opt.id)}
              sx={{
                margin: 1,
                "&.Mui-selected": {
                  backgroundColor: "#02A7DD",
                },
                "&.Mui-focus": {
                  backgroundColor: "#02A7DD",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#02A7DD",
                },
              }}
              key={opt.id}
            >
              <ListItemIcon>{opt.icon}</ListItemIcon>
            </ListItemButton>
          );
        })}
      </List>
    </Container>
  );
};

export default Sidebar;
