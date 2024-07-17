'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Checkbox, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem } from '@mui/material';
import { oneLetter } from '@/data/oneLetter';
import { bangla } from '@/data/bangla';
import { MouseEvent, useState } from 'react';

import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './SutonnyMJ-Bold.ttf',
  display: 'swap',
})

interface ILesson {
  id: number;
  itemName: string;
  content: string[];
  instruction: string;
}

interface ICurrent {
  itemName: string;
  content: string;
  instruction: string;
}

export default function Layout() {
  const [current, setCurrent] = useState<ICurrent | null>(null
    // {
    //   itemName: "",
    //   content: "",
    //   instruction: ""
    // }
  )
  const [contentList, setContentList] = useState<ILesson[]>([
    // {
    //   id: 0,
    //   itemName: "",
    //   content: [""],
    //   instruction: ""
    // }
  ])
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [heading, setHeading] = useState<string>("Select Lession(s)")
  const open = Boolean(anchorEl);

  const [checked, setChecked] = useState<number[]>([]);


  // const allSingleLettersWithKar = oneLetter.aKar.concat(oneLetter.hosroEKar, oneLetter.dirghoEKar, oneLetter.hosroUKar, oneLetter.dirghoUKar, oneLetter.rhiKar)
  const handleNext = () => {
    const randomItemNameIndex = Math.floor(Math.random() * (contentList.length))
    const nextItemName = contentList[randomItemNameIndex]
    console.log("Next Item ", nextItemName)
    const nextContentObject = {
      itemName: nextItemName.itemName,
      content: nextItemName.content[Math.floor(Math.random() * (nextItemName.content.length))],
      instruction: nextItemName.instruction
    }
    console.log("Lesson object ", nextContentObject)
    if (nextContentObject.content === current?.content) {
      console.error("double");
      handleNext();
    } else
      setCurrent(nextContentObject)
  }

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (e: MouseEvent<HTMLLIElement>, item: number) => {
    e.stopPropagation();
    console.log(item);
    setAnchorEl(null);
  };

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);

      //new content list need to add in contentList state
      setContentList(prev => {
        const newItem = bangla.find(item => item.id === value);
        if (newItem) {
          return [...prev, newItem];
        }
        return prev;
      });

    } else {
      newChecked.splice(currentIndex, 1);

      //remove the content list from the contentList state
      setContentList(prev => prev.filter(item => item.id !== value));
    }

    console.log(newChecked)

    setChecked(newChecked);
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
            onClose={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 0)}
          // MenuListProps={{
          //   'aria-labelledby': 'basic-button',
          // }}
          >
            <MenuItem>
              <List
                component="nav"
              >
                {
                  bangla.map((lesson) => {
                    const labelId = `checkbox-list-secondary-label-${lesson.id}`;
                    return (
                      <ListItem
                        key={lesson.id}
                        secondaryAction={
                          <Checkbox
                            edge="end"
                            onChange={handleToggle(lesson.id)}
                            checked={checked.indexOf(lesson.id) !== -1}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        }
                      >
                        <ListItemButton>
                          <ListItemText id={labelId} primary={lesson.itemName} />
                        </ListItemButton>
                      </ListItem>
                    )
                  })
                }

              </List>
            </MenuItem>
            {/* <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, -1)}>ধ্বনি</MenuItem>
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
            <MenuItem onClick={(e: MouseEvent<HTMLLIElement>) => handleMenuClose(e, 10)}>া +  ি +  ী +  ু +  ূ +  ৃ +  ে +  ৈ +  ো + ৌ</MenuItem> */}
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
              {current?.content}
            </Typography>
          </Box>
          <Box className='flex justify-around p-4'>
            {/* <Button variant='contained' color="success">
              Correct
            </Button>
            <Button variant='contained' color="error">
              Wrong
            </Button> */}
            {
              contentList.length > 0 && (
                <Button variant='contained' color="primary" onClick={handleNext}>
                  Next
                </Button>
              )
            }

          </Box>
        </Paper>

        <Box sx={{ mt: 2}}>
          <Typography variant='h5'>নির্দেশনা</Typography>
          <Typography>{current?.instruction}</Typography>
        </Box>
      </Box>

    </>
  );
}
