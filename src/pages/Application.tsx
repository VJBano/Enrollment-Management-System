import { Box, Container, Grid, styled } from "@mui/material";
import Paper from '@mui/material/Paper';

const Application = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: "green" }}
    >
      <Box sx={{ backgroundColor: "blue" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
        {/* <Typography>Application</Typography> */}
      </Box>
    </Container>
  );
};

export default Application;
