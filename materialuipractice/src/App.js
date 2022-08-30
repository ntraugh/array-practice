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
    </>
  );
}

export default App;
