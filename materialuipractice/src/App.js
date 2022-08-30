import './App.css';
import { 
  Typography, 
  AppBar, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  CssBaseline, 
  Grid, 
  Toolbar, 
  Container } from "@mui/material"

import { PhotoCamera } from "@mui/icons-material"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>
            Photo Albums
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
              Photo Albums
            </Typography>
            <Typography variant='subtitle1' align="center" color="textSecondary" paragraph>
              More Stuff to display on this page probably photo albums so you can click on them 
            </Typography>
          </Container>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>
      </main>
    </>
  );
}

export default App;
