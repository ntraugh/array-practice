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
  Container,
  Button } from "@mui/material"

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
      <main>
        <div>
          <Container maxWidth="sm" style={{"marginTop": "100px"}}>
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
              Photo Albums
            </Typography>
            <Typography variant='subtitle1' align="center" color="textSecondary" paragraph>
              More Stuff to display on this page probably photo albums so you can click on them 
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color='secondary'>
                      Hello
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color='primary'>
                      Hello Again
                    </Button>
                  </Grid>
                </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
