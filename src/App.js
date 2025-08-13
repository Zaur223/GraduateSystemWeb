import Box from '@mui/material/Box';
import './App.css';
import Header from './components/Header';
import Router from './routers';
import Container from '@mui/material/Container';


function App() {
  return (
    <>
      <Header />

      <Box sx={{backgroundImage: 'url(images/background.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', minHeight: {xs: '900px', md: '800px'}}}>
        <Container>
          <Router />
        </Container>
      </Box>
    </>
  )
}

export default App;
