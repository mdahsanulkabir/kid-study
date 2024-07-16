'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { oneLetter } from '@/data/oneLetter';
import { useState } from 'react';

export default function Layout() {
  const [current, setCurrent] = useState<string>('')

  const handleNext = () => {
    const randomIndex = Math.ceil(Math.random()*(oneLetter.aKar.length+1))
    const nextCharacter = oneLetter.aKar[randomIndex]
    setCurrent(nextCharacter)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{ height: "500px" }}
        // className='mt-20'
      >
        <Paper elevation={4} sx={{ height: "500px" }} 
        className='relative flex flex-col justify-between'
        >
          <Typography variant="h4">
            ১ অক্ষর
          </Typography>
          <Box sx={{textAlign: 'center'}}>
          <Typography variant="h1">
            {current}
          </Typography>
          </Box>
          <Box className='flex justify-around p-4'>
            <Button variant='contained' color="success">
              Correct
            </Button>
            <Button variant='contained' color="error">
              Wrong
            </Button>
            <Button variant='contained' color="primary" onClick={handleNext}>
              Next
            </Button>
          </Box>
        </Paper>
      </Box>

    </>
  );
}
