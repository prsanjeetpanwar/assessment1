import React from 'react';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useSelector } from 'react-redux';

const Abilities = [
  { name: 'hp', label: 'HP', gradient: 'from-pink-300 to-pink-500' },
  { name: 'attack', label: 'Attack', gradient: 'from-yellow-300 to-yellow-500' },
  { name: 'defense', label: 'Defense', gradient: 'from-teal-300 to-teal-500' },
  { name: 'special-attack', label: 'Special Attack', gradient: 'from-orange-300 to-orange-500' },
  { name: 'special-defense', label: 'Special Defense', gradient: 'from-sky-300 to-sky-500' },
  { name: 'speed', label: 'Speed', gradient: 'from-indigo-300 to-indigo-500' },
];

const AbilitiesCard = () => {
  const pokemon = useSelector((state) => state.pokemon.selectedPokemon);

  const getPokemonStat = (stats) => {
    const searchedStats = pokemon?.stats?.find(
      (obj) => obj.name === stats.name
    );
    if (searchedStats) {
      return searchedStats.baseStat;
    }
    return 0; 
  };

  return (
    <div className="AbilitiesCard">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <List
            dense
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            {Abilities.map((stat) => (
              <ListItem key={stat.name} disablePadding>
                <ListItemButton>
                  <Box key={stat.name} className="flex flex-col items-start">
                    <Typography variant="h6" sx={{ ml: 1 }} className="nomes">
                      {stat.label} : {getPokemonStat(stat)}
                    </Typography>

                   
                    <div className="w-full bg-gray-200 rounded-full h-2.5
                     dark:bg-gray-700">
                      <div
                        className={`bg-gradient-to-r 
                        ${stat.gradient} h-2.5 rounded-full`}
                        style={{ width: `${getPokemonStat(stat)}%` }}
                      ></div>
                    </div>
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default AbilitiesCard;
