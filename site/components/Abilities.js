import React from 'react';
import {
  Typography
} from '@material-ui/core';


const Abilities = props => {
  let {
    ability1,
    ability2,
    ability3
  } = props;


  return (
    <>
      <Typography variant="h4">Abilities</Typography>
      <Typography>{ability1}</Typography>
      <Typography>{ability2}</Typography>
      <Typography>{ability3}</Typography>
    </>
  )
};

export default Abilities;
