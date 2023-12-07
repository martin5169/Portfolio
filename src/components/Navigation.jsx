
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "@mui/material";
import Switch from '@mui/material/Switch';
import React, { useRef, useState,useEffect } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Body from "./Body";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../redux/actions';
import spainFlag from '/public/spain.svg';
import ukFlag from '/public/ukFlag.png'
import { Link } from 'react-router-dom';

function Navigation() {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleLanguage = () => {
    const newLanguage = selectedLanguage === 'es' ? 'en' : 'es';
    dispatch(setLanguage(newLanguage));
  };

  const toggleDarkMode = () => {

    setIsDarkMode(!isDarkMode);

    const rootElement = document.documentElement;
    rootElement.style.color = isDarkMode ? "#ffffff" : "#242526";
    rootElement.style.backgroundColor = isDarkMode ? "#242424" : "#bfc1c4";
  };

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

  return (
   <div>
    <Navbar className="bg-body-tertiary">
      <Button onClick={toggleDarkMode} className="dark">
        {isDarkMode ? <WbSunnyIcon style={{ color: '#ffffff' }} /> : <Brightness2Icon style={{ color: '#ffffff' }} />}
      </Button>
      <div style={{ marginLeft: 'auto' }}>    
      <Stack direction="row" spacing={1} alignItems="center" >
     
        <Typography>EN</Typography>
        <img src={ukFlag} height={13} alt="UK Flag" />
        <AntSwitch checked={selectedLanguage === 'es'} inputProps={{ 'aria-label': 'ant design' }}  onChange={toggleLanguage} />
        <Typography>ES</Typography>
        <img src={spainFlag} height={23} alt="Spain Flag" />
        </Stack>
        </div>
      
  
     </Navbar>
     
     </div>
   
  );
}

export default Navigation;
