import React from 'react';
import { Typography, CssBaseline, AppBar,Toolbar, Container,Grid,Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';

const App = () => {
    const cards = [1,2,3,4,5,6,7,8,9,10,11,12]
    return ( 
        <div>
            <CssBaseline/>

            <AppBar position='relative'>
                
                <Toolbar >
                    <AddAPhotoRoundedIcon sx={{
                        marginRight:"15px"
                    }}/>
                    <Typography variant="h6" >
                        Photo Album
                    </Typography>
                </Toolbar>

            </AppBar>
            <main>
                <div
                //  style={{backgroundColor:"#eee"}}
                >
                    <Container maxWidth='sm' sx={{
                        padding:(theme)=>(theme.spacing(8,0,6)),
                        backgroundColor:(theme)=>(theme.palette.background.paper)
                    }} >
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
                            <Grid
                             container
                              spacing={2} justifyContent='center'
                              sx={{
                                m:5
                              }}
                              >
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
                <container sx={{
                    padding:"20px 0"
                }}>
                    <Grid container  spacing={2}>
                        {cards.map(card=>(
                           
                            <Grid item  key={card}  xs={12} sm={6} md={4} lg={3} >
                            <Card
                            sx={{
                                height:'100%',
                                display:"flex",
                                flexDirection:'column'
                            }}>
                                <CardMedia
                                sx={{
                                    paddingTop:"56.25%"
                                }}
                                image='https://source.unsplash.com/random'
                                title='image title'
                                />

                                <CardContent sx={{
                                    flexGrow:1
                                }}>
                                    <Typography variant='h5'>
                                        Heading
                                    </Typography>
                                    <Typography variant='h8'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores odio quod natus?
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>view</Button>
                                    <Button size='small' color='primary'>Edit</Button>
                                </CardActions>
                            </Card>
                    </Grid>
                        ))}

                    </Grid>
                </container>
            </main>
            <footer
            sx={{
                // backgroundColor:(theme)=>(theme.palette.background.paper),
                backgroundColor:'blue',
                padding:'50px 0'
            }}
            >
                <Typography variant='h6' align='center'>
                    Footer
                </Typography>
                <Typography variant='subtitle1' align='center'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, ipsam.
                </Typography>
            </footer>
        </div>
     );
}
 
export default App;