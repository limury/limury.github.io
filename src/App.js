import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@mui/system';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/system';
import { useTheme, createTheme } from '@mui/material/styles';
import Profile from './components/Profile';
import DrawerBar from './components/DrawerBar';

const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffffff',
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

        <Box sx={{display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Routes>
            <Route exact path="/" element={<Profile/>}></Route>
            <Route path="/experience" element={<Profile/>}></Route>
          </Routes>
        </Box>
      </Container>

    </ThemeProvider>
  );
}

export default App;
