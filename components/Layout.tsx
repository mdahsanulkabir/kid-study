'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, List, ListItemButton, ListItemText, Menu, MenuItem } from '@mui/material';
import { oneLetter } from '@/data/oneLetter';
import { MouseEvent, useState } from 'react';

import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './SutonnyMJ-Bold.ttf',
  display: 'swap',
})

export default function Layout() {
  const [current, setCurrent] = useState<string>('')
  const [contentList, setContentList] = useState<string[]>(oneLetter.aKar)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [heading, setHeading] = useState<string>("আ-কার")
  const open = Boolean(anchorEl);

  // const allSingleLettersWithKar = oneLetter.aKar.concat(oneLetter.hosroEKar, oneLetter.dirghoEKar, oneLetter.hosroUKar, oneLetter.dirghoUKar, oneLetter.rhiKar)
  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * (contentList.length))
    const nextCharacter = contentList[randomIndex]
    console.log("index ", randomIndex)
    console.log("character ", nextCharacter)
    if (nextCharacter === current) {
      console.error("double");
      handleNext();
    } else
      setCurrent(prev => nextCharacter)
  }

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (e: MouseEvent<HTMLLIElement>, item: number) => {
    e.stopPropagation();
    console.log(item);
    setAnchorEl(null);
    switch(item) {
      case -1 : {
        setContentList(oneLetter.sound);
        setHeading("ধ্বনি")
        break;
      }
      case 0 : {
        setContentList(oneLetter.oneLetterWords);
        setHeading("কার বিহীন শব্দ")
        break;
      }
      case 1: {
        setContentList(oneLetter.aKar);
        setHeading("আ-কার")
        break;
      }
      case 2: {
        setContentList(oneLetter.aKar.concat(oneLetter.hosroEKar));
        setHeading("আ-কার + ই-কার")
        break;
      }
      case 3: {
        setContentList(oneLetter.aKar.concat(oneLetter.hosroEKar, oneLetter.dirghoEKar));
        setHeading("আ-কার + ই-কার + ঈ-কার")
        break;
      }
      case 4: {
        setContentList(oneLetter.aKar.concat(oneLetter.hosroEKar, oneLetter.dirghoEKar, oneLetter.hosroUKar));
        setHeading("আ-কার + ই-কার + ঈ-কার + উ-কার")
        break;
      }
      case 5: {
        setContentList(oneLetter.aKar.concat(oneLetter.hosroEKar, oneLetter.dirghoEKar, oneLetter.hosroUKar, oneLetter.dirghoUKar));
        setHeading("আ-কার + ই-কার + ঈ-কার + উ-কার + ঊ-কার")
        break;
      }
      case 6: {
        setContentList(oneLetter.aKar.concat(oneLetter.hosroEKar, oneLetter.dirghoEKar, oneLetter.hosroUKar, oneLetter.dirghoUKar, oneLetter.rhiKar));
        setHeading("আ-কার + ই-কার + ঈ-কার + উ-কার + ঊ-কার + ঋ-কার")
        break;
      }
      case 7: {
        setContentList(oneLetter.aKar.concat(oneLetter.hosroEKar, oneLetter.dirghoEKar, oneLetter.hosroUKar, oneLetter.dirghoUKar, oneLetter.rhiKar, oneLetter.eKar));
        setHeading("আ-কার + ই-কার + ঈ-কার + উ-কার + ঊ-কার + ঋ-কার + এ-কার")
        break;
      }
      case 8: {
        setContentList(oneLetter.aKar.concat(oneLetter.hosroEKar, oneLetter.dirghoEKar, oneLetter.hosroUKar, oneLetter.dirghoUKar, oneLetter.rhiKar, oneLetter.eKar, oneLetter.oiKar));
        setHeading("আ-কার + ই-কার + ঈ-কার + উ-কার + ঊ-কার + ঋ-কার + এ-কার + ঐ-কার")
        break;
      }
      case 9: {
        setContentList(oneLetter.aKar.concat(oneLetter.hosroEKar, oneLetter.dirghoEKar, oneLetter.hosroUKar, oneLetter.dirghoUKar, oneLetter.rhiKar, oneLetter.eKar, oneLetter.oiKar, oneLetter.oKar));
        setHeading("আ-কার + ই-কার + ঈ-কার + উ-কার + ঊ-কার + ঋ-কার + এ-কার + ঐ-কার + ও-কার")
        break;
      }
      case 10: {
        setContentList(oneLetter.aKar.concat(oneLetter.hosroEKar, oneLetter.dirghoEKar, oneLetter.hosroUKar, oneLetter.dirghoUKar, oneLetter.rhiKar, oneLetter.eKar, oneLetter.oiKar, oneLetter.oKar, oneLetter.ouKar));
        setHeading("আ-কার + ই-কার + ঈ-কার + উ-কার + ঊ-কার + ঋ-কার  + এ-কার + ঐ-কার + ও-কার + ঔ-কার")
        break;
      }
      default: {
        return;
      }
    }
  };

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
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e,0)}
            // MenuListProps={{
            //   'aria-labelledby': 'basic-button',
            // }}
          >
            <MenuItem>
              <List
                component="nav"
              >
                <ListItemButton>
                  <ListItemText primary="sample" />
                </ListItemButton>
              </List>
            </MenuItem>
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, -1)}>ধ্বনি</MenuItem>
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 0)}>কার বিহীন শব্দ</MenuItem>
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 1)}>া</MenuItem>
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 2)}>া +  ি</MenuItem>
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 3)}>া +  ি +  ী</MenuItem>
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 4)}>া +  ি +  ী +  ু</MenuItem>
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 5)}>া +  ি +  ী +  ু +  ূ</MenuItem>
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 6)}>া +  ি +  ী +  ু +  ূ +  ৃ</MenuItem>
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 7)}>া +  ি +  ী +  ু +  ূ +  ৃ +  ে</MenuItem>
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 8)}>া +  ি +  ী +  ু +  ূ +  ৃ +  ে +  ৈ</MenuItem>
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 9)}>া +  ি +  ী +  ু +  ূ +  ৃ +  ে +  ৈ +  ো</MenuItem>
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 10)}>া +  ি +  ী +  ু +  ূ +  ৃ +  ে +  ৈ +  ো + ৌ</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        sx={{ height: "500px" }}
      // className='mt-20'
      >
        <Paper elevation={4} sx={{ height: "500px" }}
          className='relative flex flex-col justify-between'
        >
          <Typography variant="h6">
            {heading}
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" className={myFont.className}>
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
