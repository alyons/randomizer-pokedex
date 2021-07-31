import React from 'react';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography
} from '@material-ui/core';

import typeEffectiveness from '../assets/data/gen2TypeEffectiveness';

function multiplyMap(typeMap, key, factor) {
  typeMap.set(key, typeMap.get(key) * factor)
}

function calculateDamage(typeMap, testType) {
  let typeEffects = typeEffectiveness[testType];

  typeEffects.weakness.forEach((t) => multiplyMap(typeMap, t, 2));
  typeEffects.resistance.forEach((t) => multiplyMap(typeMap, t, 0.5));
  typeEffects.immunity.forEach((t) => multiplyMap(typeMap, t, 0));

  return typeMap;
}

let imgStyle = {
  transform: 'rotate(90deg)'
};

const DamageTaken = props => {
  let typeList = Object.keys(typeEffectiveness);
  let { type1, type2 } = props;
  let typeMap = new Map();
  typeList.forEach((t) => { typeMap.set(t, 1); });
  calculateDamage(typeMap, type1.toLowerCase());
  if (!!type2) calculateDamage(typeMap, type2.toLowerCase());

  return (
    <>
    <Typography variant="h4">Damage Taken</Typography>
      <Table>
        <TableHead>
          <TableRow>
            {typeList.map((t) => (
              <TableCell key={t}>
                <img src={`${window.location.origin}/assets/types/${t}.gif`} alt={t} style={imgStyle} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {typeList.map((t) => (
              <TableCell key={`${t}-multiplier`}>{typeMap.get(t)}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
};

export default DamageTaken;
