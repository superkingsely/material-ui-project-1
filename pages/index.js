import Hero from '@/components/main/hero'
import Main from '@/components/main/Main'
import Navbar from '@/components/Navbar'
import { Box } from '@mui/material'
import React from 'react'

const index = ({datas}) => {
  return (
    <Box
    sx={{
      // border:'2px solid',
      minHeight:'100vh',
      background:'linear-gradient(to right bottom,lightblue,blue,black)'
      
    }}
    >
      <Navbar/>
      <Hero/>
      <Main datas={datas}/>
    </Box>
  )
}

export default index;
export const getServerSideProps=async()=>{
  const res=await fetch('http://localhost:3000/api')
  const data=await res.json()
  return{
      props:{
          datas:data
      }
  }
}