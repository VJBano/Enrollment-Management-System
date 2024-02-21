
import { Container } from '@mui/material'

import SysRouter from './Routes/SysRouter'

function App() {


  return (
    <Container maxWidth={false} disableGutters sx={{display:"flex",  }}>
      <SysRouter/>
    </Container>
  )
}

export default App
