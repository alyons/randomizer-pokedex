const typeEffectiveness = {
  bug: {
    weakness: ['fire', 'flying', 'rock'],
    resistance: ['fighting',  'grass', 'ground'],
    immunity: []
  },
  dark: {
    weakness: ['bug', 'fighting'],
    resistance: ['dark', 'ghost'],
    immunity: ['psychic']
  },
  dragon: {
    weakness: ['dragon', 'ice'],
    resistance: ['electric', 'fire', 'grass', 'water'],
    immunity: []
  },
  electric: {
    weakness: ['ground'],
    resistance: ['electric', 'flying', 'steel'],
    immunity: []
  },
  fighting: {
    weakness: ['flying', 'psychic'],
    resistance: ['bug', 'dark', 'rock'],
    immunity: []
  },
  fire: {
    weakness: ['ground', 'rock', 'water'],
    resistance: ['bug', 'fire', 'grass', 'ice', 'steel'],
    immunity: []
  },
  flying: {
    weakness: ['electric', 'ice', 'rock'],
    resistance: ['bug', 'fighting', 'grass'],
    immunity: ['ground']
  },
  ghost: {
    weakness: ['dark', 'ghost'],
    resistance: ['bug', 'poison'],
    immunity: ['fighting', 'normal']
  },
  grass: {
    weakness: ['bug', 'fire', 'flying', 'ice', 'poison'],
    resistance: ['electric', 'grass', 'ground', 'water'],
    immunity: []
  },
  ground: {
    weakness: ['grass', 'ice', 'water'],
    resistance: ['poison', 'rock'],
    immunity: ['electric']
  },
  ice: {
    weakness: ['fighting', 'fire', 'rock', 'steel'],
    resistance: ['ice'],
    immunity: []
  },
  normal: {
    weakness: ['fighting'],
    resistance: [],
    immunity: ['ghost']
  },
  poison: {
    weakness: ['ground', 'psychic'],
    resistance: ['bug', 'fighting', 'grass', 'poison'],
    immunity: []
  },
  psychic: {
    weakness: ['bug', 'dark', 'ghost'],
    resistance: ['fighting', 'psychic'],
    immunity: []
  },
  rock: {
    weakness: ['fighting', 'grass', 'ground', 'steel', 'water'],
    resistance: ['fire', 'flying', 'normal', 'poison'],
    immunity: []
  },
  steel: {
    weakness: ['bug', 'dark', 'dragon', 'flying', 'ghost', 'grass', 'ice', 'normal', 'psychic', 'rock', 'steel'],
    resistance: ['fighting', 'fire', 'ground'],
    immunity: ['poison']
  },
  water: {
    weakness: ['electric', 'grass'],
    resistance: ['fire', 'ice', 'steel', 'water'],
    immunity: []
  }
};

export default typeEffectiveness;
