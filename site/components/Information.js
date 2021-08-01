import React from 'react';
import {
  Typography
} from '@material-ui/core';

import Abilities from './Abilities';
import TypeIcon from './TypeIcon';

const Information = props => {
  let { name, number, type1, type2, ability1, ability2, ability3 } = props;

  let typeStyle = {
    height: 'auto',
    width: '45%'
  };

  return (
    <>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="h5">{number}</Typography>
      <>
        <TypeIcon {...{ type: type1 }} style={typeStyle} />
        {(!!type2) ? <TypeIcon {...{ type: type2 }} style={typeStyle} /> : <div /> }
      </>
      <Abilities {...{ ability1: ability1, ability2: ability2, ability3: ability3 }}/>
    </>
  )
};

export default Information;
