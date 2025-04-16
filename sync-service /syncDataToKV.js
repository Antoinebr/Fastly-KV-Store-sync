require('dotenv').config();
const axios = require('axios');

const pokemons = require('./pokemons.json');

const storeId = "zmgs0c96xuuf01w179n91g"; // 👈 Update this value with your store id 



(async () => {


    if (!process.env.FASTLY_KEY) throw new Error('No API key as been set... ❌');


    for (const pokemon of pokemons) {

        const response = await axios.put(
            `https://api.fastly.com/resources/stores/kv/${storeId}/batch`, {
                "key": pokemon.name,
                "value": Buffer.from(JSON.stringify(pokemon)).toString('base64')
            }, {
                headers: {
                    'Content-Type': 'application/x-ndjson',
                    'Accept': 'application/json',
                    'Fastly-Key': process.env.FASTLY_KEY
                },
            }
        );

        console.log(`Insetion of ${pokemon.name} is : `, response.status);

    }




})();