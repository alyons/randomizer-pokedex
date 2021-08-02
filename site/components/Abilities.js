import React, { useEffect, useState } from 'react';
import {
  Typography
} from '@material-ui/core';

const Abilities = props => {
  let {
    ability1,
    ability2,
    ability3
  } = props;

  const [abilityData, setAbilityData] = useState({});
  let uri = `/api/abilities?values=${ability1.toLowerCase()}`;
  if (ability2 != '--') uri += `,${ability2.toLowerCase()}`
  if (ability3 != '--') uri += `,${ability3.toLowerCase()}`

  useEffect(() => {
    fetch(uri).then(
      res => res.json().then(value => {
        setAbilityData(value);
      })
    )
  }, [ability1, ability2, ability3]);

  let ability1Display = <Typography>{ability1}: {abilityData[ability1.toLowerCase()]}</Typography>;
  let ability2Display = (ability2 == '--') ? null : <Typography>{ability2}: {abilityData[ability2.toLowerCase()]}</Typography>;
  let ability3Display = (ability3 == '--') ? null : <><Typography variant="h6">HIDDEN</Typography><Typography> {ability3}: {abilityData[ability3.toLowerCase()]}</Typography></>;

  return (
    <>
      <Typography variant="h4">Abilities</Typography>
      {ability1Display}
      {ability2Display}
      {ability3Display}
    </>
  )
};

export default Abilities;
