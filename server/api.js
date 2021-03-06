import express from 'express';
import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();
const router = express.Router();

function fixMoveNames (moveNames) {
  let output = [];

  moveNames.forEach((name) => {
    switch(name) {
      case 'poisonpowder': output.push('poison powder'); break;
      case 'vicegrip': output.push('vise-grip'); break;
      default: output.push(name); break;
    }
  });

  return output;
};

router.get('/abilities', (req, res) => {
  let values = req.query.values;
  let abilities = values.split(',');
  let apiCalls = abilities.map((a) => (`/api/v2/ability/${a.replace(' ', '-')}`));
  P.resource(apiCalls)
    .then((response) => {
      let abilityMap = {}

      response.forEach(data => {
        abilityMap[data.name.replace('-', ' ')] = data.effect_entries.find(e => e.language.name == 'en').short_effect;
      });

      res.send(abilityMap);
    }).catch((err) => {
      console.error(err);
      res.send(err);
    });
});

router.get('/moves', (req, res) => {
  let values = req.query.values;
  let moves = values.split(',');
  moves = fixMoveNames(moves);
  console.log(moves);
  let apiCalls = moves.map((m) => (`/api/v2/move/${m.replace(' ', '-')}`));

  P.resource(apiCalls)
    .then((response) => {
      let moveMap = {};

      response.forEach(data => {
        let move = {};
        move.accuracy = data.accuracy;
        move.damageClass = data.damage_class.name;
        move.effectChance = data.effect_chance;
        move.power = data.power;
        move.pp = data.pp;
        move.flavorText = data.flavor_text_entries.find(f => f.language.name == "en" && f.version_group.name == "black-white").flavor_text.replace(/\n/g, ' ');
        move.type = data.type.name;

        moveMap[data.names.find(n => n.language.name == 'en').name] = move;
      });

      res.send(moveMap);
    }).catch((err) => {
      console.error(err);
      res.send(err);
    });

});

export default router;
