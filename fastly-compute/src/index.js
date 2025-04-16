import { Router } from "@fastly/expressly";
import { KVStore } from "fastly:kv-store";

const router = new Router();



router.get("/", async (req, res) => {

  const files = new KVStore('pokemons');

  const entry = await files.get('Bulbasaur');

  const entryText = await entry.text();


  res.json(JSON.parse(entryText));
  

});



router.get("/getPokemon/:pokemonName", async (req, res) => {

  const pokemonName = req.params.pokemonName;

  console.log(typeof pokemonName, ` value of `, pokemonName);
  


  if(!pokemonName) throw new Error(`${pokemonName} is not defined ! the route expects /getPokemon/{PokemonName}`);


  const files = new KVStore('pokemons');

  const entry = await files.get(pokemonName);


  const entryText = await entry.text();


  res.json(JSON.parse(entryText));
  

});



router.listen();