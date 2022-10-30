import { useState } from "react";
import { Navbar } from "./Comoponents/Navbar";
import { Rightbar } from "./Comoponents/Rightbar";
import { Feed } from "./Comoponents/Feed";
import { Sidebar } from "./Comoponents/Sidebar";
import { Box,Stack } from "@mui/system";
import { Add } from "./Comoponents/Add";
import { createTheme, ThemeProvider } from "@mui/material";

import { text } from "@fortawesome/fontawesome-svg-core";

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette:{
      mode : mode,
    }
  })
 
  return (
    <ThemeProvider theme={darkTheme}>
       <Box className="App" bgcolor={"background.default"} color ={'text.primary'} >
        <Navbar/>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
    
  )
}

export default App;
