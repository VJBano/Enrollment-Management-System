
import { Container } from '@mui/material'

import SysRouter from './Routes/SysRouter'
import Sample from './components/sample'

function App() {


  return (
    <Container maxWidth={false} disableGutters sx={{display:"flex",  }}>
      <SysRouter/>
      {/* <Sample/>
      <Sample/> */}
    </Container>
  )
}

export default App
