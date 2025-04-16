require('dotenv').config();
const cron = require('node-cron');
const axios = require('axios');

const extraPokemons = require('./extraPokemons.json');


if (!process.env.FASTLY_KEY) throw new Error('No API key as been set... ❌');

const storeId = "zmgs0c96xuuf01w179n91g"; // 👈 Update this value with your store id 

// Task to run every minute
cron.schedule('* * * * *', async () => {
  const now = new Date();
  console.log(`Task ran at: ${now.toLocaleTimeString()}`);

  // get a random pokemon from the extraPokemons array
  const randomIndex = Math.floor(Math.random() * extraPokemons.length);
  const randomPokemon = extraPokemons[randomIndex];

  try {

    const response = await axios.put(
      `https://api.fastly.com/resources/stores/kv/${storeId}/batch`, {
        "key": randomPokemon.name,
        "value": Buffer.from(JSON.stringify(randomPokemon)).toString('base64')
      }, {
        headers: {
          'Content-Type': 'application/x-ndjson',
          'Accept': 'application/json',
          'Fastly-Key': process.env.FASTLY_KEY
        },
      }
    );
  
    console.log(`Insertion of ${randomPokemon.name} returned a  : `, response.status);
  
    
  } catch (error) {
    
      console.log(error);
  }


});