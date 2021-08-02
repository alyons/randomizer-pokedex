import React, { useEffect, useState } from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Grid
} from '@material-ui/core';

const MoveList = props => {
  let { moveSet } = props;

  const [moves, setMoves] = useState([]);
  let moveNames = moveSet.map((m) => m.name.replace(' ', '-').toLowerCase());
  let uri = `/api/moves?values=${moveNames.join(',')}`;
  uri.replace(/,\s*$/, "");
  uri = uri.toLowerCase();

  useEffect(() => {
    fetch(uri).then(
      res => res.json().then(value => {
        setMoves(value);
      })
    )
  }, [moveSet]);

  return (
    <>
      <Typography variant="h4">Move Set</Typography>
      <TableContainer component={Paper}>
          <Table aria-label="Pokemon Move List">
            <TableHead>
              <TableRow>
                <TableCell>Level</TableCell>
                <TableCell>Attack Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Power</TableCell>
                <TableCell>Accuracy</TableCell>
                <TableCell>PP</TableCell>
                <TableCell>Effect %</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {moveSet.map((move, i) => (
                <>
                  <TableRow>
                    <TableCell rowSpan={2}>{move.level}</TableCell>
                    <TableCell rowSpan={2}>{move.name}</TableCell>
                    <TableCell>{(!!moves && !!moves[move.name] ? moves[move.name].type : 'Data not found.')}</TableCell>
                    <TableCell>{(!!moves && !!moves[move.name] ? moves[move.name].damageClass : 'Data not found.')}</TableCell>
                    <TableCell>{(!!moves && !!moves[move.name] ? moves[move.name].power : 'Data not found.')}</TableCell>
                    <TableCell>{(!!moves && !!moves[move.name] ? moves[move.name].accuracy : 'Data not found.')}</TableCell>
                    <TableCell>{(!!moves && !!moves[move.name] ? moves[move.name].pp : 'Data not found.')}</TableCell>
                    <TableCell>{(!!moves && !!moves[move.name] ? moves[move.name].effectChance : 'Data not found.')}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={6}>{(!!moves && !!moves[move.name] ? moves[move.name].flavorText : 'Data not found.')}</TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  )
};

export default MoveList;
