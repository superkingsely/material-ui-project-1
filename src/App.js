import React from 'react';
import { Typography, CssBaseline, AppBar,Toolbar, Container,Grid,Button } from '@mui/material';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';

const App = () => {

    return ( 
        <div>
            <CssBaseline/>

            <AppBar position='relative'>
                
                <Toolbar >
                    <AddAPhotoRoundedIcon/>
                    <Typography variant="h6" >
                        Photo Album
                    </Typography>
                </Toolbar>

            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm' >
                        <Typography
                        variant='h2'
                        align='center'
                        color='textPrimary'
                        gutterBottom
                        >
                        Photo Album
                        </Typography>
                        <Typography
                        variant='h5'
                        align='center'
                        color='textSecondary'
                        paragraph
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla obcaecati voluptatem expedita sapiente esse fugiat dolor, molestias sunt deleniti.
                        </Typography>

                        <div>
                            <Grid container spacing={2} justifyContent='center'>
                                <Grid item>
                                    <Button variant='contained'
                                    color='primary'
                                    >
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined'
                                    color='primary'
                                    >
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </div>
     );
}
 
export default App;