import { Container } from "@mui/material"
import Header from "../components/layout/Header"
import MainBoard from "../components/layout/MainBoard"

const Main = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{display:"flex", height:"100vh",  flexDirection:"column"}}>
      
      <Header/>
      <MainBoard/>
    </Container>
  )
}

export default Main
