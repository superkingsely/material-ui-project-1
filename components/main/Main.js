import { Box, Grid } from '@mui/material'
import React from 'react'

const Main = ({datas}) => {
  return (
    <Box
    sx={{
        maxWidth:'1200px',
        margin:'auto auto'
    }}
    >
        <Grid container
        sx={{
        }}
        >
            {/* loop */}
            {
                datas.map(data=>{
                    return(

            <Grid 
            key={data.id}
            sx={{
                p:1,
                height:'300px'
            }}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            item>
                <Box
                    component={'img'}
                    width={'100%'}
                    height={'100%'}
                    src={data.img}
                />
                
            </Grid>
                    )
                })
            }
        </Grid>
    </Box>
    )
}

export default Main

