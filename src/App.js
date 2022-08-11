import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@mui/system';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/system';
import { useTheme, createTheme } from '@mui/material/styles';
import Profile from './components/Profile';
import ExtendedCV from './components/ExtendedCV';
import DrawerBar from './components/DrawerBar';
import Contact from './components/Contact';

const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffffff',
      // main: '#000000',
    },
    secondary: {
      main: '#1e88e5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <Container sx={{height: '100vh', justifyContent: "center", alignItems: "center", display: 'flex', paddingX: {xs: 0, sm: '24px'}}}>
        <DrawerBar/>

          <Routes>
            <Route exact path="/" element={
              <Box sx={{display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Profile/>
              </Box>
            }></Route>
            <Route path="/extended-cv" element={
              <Box sx={{display: 'flex', flexDirection: 'column', alignSelf: 'start'}}>
                <ExtendedCV/>
              </Box>
            }></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
      </Container>

    </ThemeProvider>
  );
}

export default App;
