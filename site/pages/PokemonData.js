import React from 'react';
import { useParams } from 'react-router';
import { Radar } from 'react-chartjs-2';
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

import pokedexData from '../assets/data/randomizer_30072021.json';
import DamageTaken from '../components/DamageTaken';
import Abilities from '../components/Abilities';
import Information from '../components/Information';
import MoveList from '../components/MoveList';

const PokemonData = props => {

  let { dexNumber } = useParams();

  let pokemonData = pokedexData[dexNumber - 1];
  let statArray = [
    Number(pokemonData.hp),
    Number(pokemonData.atk),
    Number(pokemonData.def),
    Number(pokemonData.spa),
    Number(pokemonData.spd),
    Number(pokemonData.spe)
  ];

  let data = {
    labels: [
      "HP",
      "Attack",
      "Defense",
      "Sp. Attack",
      "Sp. Defense",
      "Speed"
    ],
    datasets: [{
      label: 'Stats',
      data: statArray,
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };
  
  let options = {
    elements: {
      line: {
        borderWidth: 3
      }
    },
    scale: {
      ticks: { beginAtZero: true },
      min: 0,
      // max: 120
    }
  };

  console.log(pokemonData);

  let imageStyle = {
    width: '100%',
    height: 'auto'
  }

  return (
    <Grid container>
      <Grid item xs={4}>
        <img src={`${window.location.origin}/assets/pokemon/${dexNumber}.png`} style={imageStyle} />
      </Grid>
      <Grid item xs={4}>
        <Information {...pokemonData} />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h4">Stats</Typography>
        <Radar data={data} options={options} />
      </Grid>
      <Grid item xs={12}>
        <DamageTaken {...{ type1: pokemonData.type1, type2: pokemonData.type2 }} />
      </Grid>
      <Grid item xs={12}>
        <MoveList {...pokemonData} />
      </Grid>
      
    </Grid>
  )
};

export default PokemonData;
