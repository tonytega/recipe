import { Navbar } from "./Comoponents/Navbar";
import { Rightbar } from "./Comoponents/Rightbar";
import { Feed } from "./Comoponents/Feed";
import { Sidebar } from "./Comoponents/Sidebar";
import { Box,Stack } from "@mui/system";

function App() {

  
 
  return (
    
       <Box className="App">
        <Navbar/>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </Stack>

      </Box>
    
  )
}

export default App;
