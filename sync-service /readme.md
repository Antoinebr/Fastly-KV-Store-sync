
# 🧬 Sync Service

This Node.js service syncs data to a Fastly KV store every minute. It can also populate the store with a base dataset.

## 🛠️ Installation

```
npm install
```

Make sure the Fastly CLI is installed on your machine. You can verify by running:

```
fastly version
```

If you don’t have it, install it from Fastly’s official docs.

⚙️ Create the KV Store

Create a new KV store using the following command:

```
npm run createKV
```

Example output:

```
❯ npm run createKV

> sync-service@1.0.0 createKV
> fastly kv-store create --name=pokemons

SUCCESS: Created KV Store 'pokemons' (zmgs0c96xuuf01w179n91g)

A new version of the Fastly CLI is available.
Current version: 10.17.1
Latest version: 11.2.0
Run `fastly update` to get the latest version.
```

Take note of the storeId returned — you’ll need it in the next steps.

## 🔐 Add Your API Key

Copy the example environment file and add your Fastly API key:

```
cp .env.example .env
```

Then edit .env and add your key:

```
FASTLY_KEY=your-api-key-here
``` 

## 📦 Populate the KV Store

Update the storeId in syncDataToKV.js with your actual store ID:

const storeId = "zmgs0c96xuuf01w179n91g"; // Replace with your store ID

Then run the script to add your base Pokémon dataset:

node syncDataToKV.js

You should see output confirming each insertion.

## 🔁 Simulate Syncing

To test periodic syncing, run:

```
node app.js
```

Every minute, the script will select a random Pokémon from extraPokemons.json and add it to your KV store.

