import { Box } from '@chakra-ui/react';
import React from 'react';
import Footers from './Footers';
import ImageSlider from './ImageVideoSlider';
import Navbar1 from './Navbar1';

const Base = ({ children }) => {
  return (
    <Box  className="boxx"  style={{width:"100vw"}}>
      <Navbar1/>
      <ImageSlider />
      <Box p={8} minH={'100vh'} style={{display:'inline-block',justifyContent:"center"}} padding={'5vh 0px 0px 0px'} overflowX={'hidden'}>
        {children}
      </Box>
      <Footers></Footers>
    </Box>
  );
};

export default Base;