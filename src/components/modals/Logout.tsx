import { Box, Button, Container, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import CancelIcon from '@mui/icons-material/Cancel';

type LogoutProps = {
  isOpen: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
};
const Logout = ({ isOpen, handleClose }: LogoutProps) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height:150,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 5,
    p: .5,
    borderRadius: 2,
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => handleClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Container disableGutters maxWidth={false} sx={{ height:"100%",justifyContent:"space-between",display:"flex", flexDirection:"column",  }}>

            <Box display={"flex"} justifyContent={"flex-end"}>
                <CancelIcon onClick={() => handleClose(false)} sx={{":hover":{ color:"red"}, height:25, width:25}}/>
            </Box>


                <Box display={"flex"} justifyContent={"center"}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you want to logout?
            </Typography>
                </Box>

            

            <Box display={"flex"} justifyContent={"flex-end"} m={2}>
            <Button onClick={() => handleClose(false)} variant="contained" >Logout</Button>
            </Box>

          </Container>
        </Box>
      </Modal>
    </div>
  );
};

export default Logout;
