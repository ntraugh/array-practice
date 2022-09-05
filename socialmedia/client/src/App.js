import React from "react";
import { Container, AppBar, Typography, Grow, Grid} from "@mui/material"
import memories from "./components/images/memories.png"
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar sx={{borderRadius: 5,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',}} position="static" color="inherit">
        <Typography variant="h2" align="center" sx={{ color: 'rgba(0,183,255, 1)'}}>
          Memories
        </Typography>
        <img style={{"marginLeft": "15px"}} src={memories} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={2}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
