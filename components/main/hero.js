import { Box, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <Box
    sx={{
        width:'100%',
        minHeight:'20vh',
        display:'flex',
        justifyContent:'center',
    }}
    >
        <Box
        sx={{
            width:{
                xs:'100%',
                sm:'50%'
            }
        }}
        >
            <Typography
            sx={{
                fontWeight:'900',
                color:'white',
                mb:1,
                mt:3
            }}
            variant='h5'
            align='center'
            >
                MY PHOTO ALBUM
            </Typography>
            <Typography
            align='center'
            color={'white'}
            sx={{
                fontWeight:'600'
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quidem exercitationem dolorum aliquid similique minus eum numquam nostrum tempore dicta, quibusdam ipsam
            </Typography>
        </Box>
    </Box>
    )
}

export default Hero