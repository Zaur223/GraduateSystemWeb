import Box from '@mui/material/Box';
import './App.css';
import Header from './components/Header.js';
import Router from './routers/index.js';
import Container from '@mui/material/Container';
import DrawerMenu from './components/DrawerMenu.js';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  const hideNav = location.pathname === '/auth' || location.pathname.startsWith('/auth/');
  return (
    <>
      {!hideNav && <Header />}

      <Box sx={{backgroundImage: 'url(images/background.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', minHeight: {xs: '900px', md: '800px'}}}>
      {!hideNav && <DrawerMenu />}
        <Container>
          <Router />
        </Container>
      </Box>
    </>
  )
}

export default App;
