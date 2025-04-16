# 🧬 Pokémon API (Fastly Compute + KVStore)

This API is built with @fastly/expressly and uses Fastly’s KVStore to serve Pokémon data.

## 📦 Endpoints

GET /

Returns the entry for Bulbasaur from the pokemons KVStore.

Example response:

```JavaScript
{
  "name": "Bulbasaur",
  "type": "Grass/Poison",
  "id": 1
}
```


```
GET /getPokemon/:pokemonName
```

Returns the entry for any specified Pokémon in the KVStore. Replace :pokemonName with the name of the Pokémon (case-sensitive).

Path Parameters:
	•	pokemonName: Name of the Pokémon (e.g. Charmander, Squirtle, Pikachu).

Example Request:

```
GET /getPokemon/Charmander
```

Example Response:

```JavaScript
{
  "name": "Charmander",
  "type": "Fire",
  "id": 4
}
```


### 🛠 How it works
	•	Data is stored in a Fastly KVStore named pokemons.
	•	The API reads JSON entries from this store and returns them via HTTP.
	•	It uses Fastly’s Express-like framework @fastly/expressly for route handling.

### ⚠️ Notes
	•	Pokémon names are case-sensitive in the current implementation.
	•	Ensure entries in pokemons KVStore are stored as valid JSON strings.



