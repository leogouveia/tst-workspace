/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { Request } from 'express';
import * as path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to ex-server!' });
});

app.get('/delay/:val', (req, res) => {
  const delay = +(<string>req.params.val ?? '1') * 1000;
  setTimeout(() => {
    res.send({
      delay: delay,
    });
  }, delay);
});

app.get(
  '/pokemons',
  async (
    req: Request<unknown, unknown, unknown, { size: number; offset: number }>,
    res
  ) => {
    try {
      const { size, offset } = req.query;

      console.log({ size, offset });

      const pokemons: any = await getPokemonList(size, offset);
      const list = await Promise.all(pokemons.map((p: any) => fetch(p.url)));
      const data = await Promise.all(list.map((r) => r.json()));
      res.send(
        data.map((d: any) => ({
          name: d.name,
          avatar: d.sprites.front_default,
          types: d.types.map((t: any) => t.type.name),
          weight: d.weight,
          height: d.height,
          abilities: d.abilities.map((a: any) => a.ability.name),
        }))
      );
    } catch (error) {
      console.error(error);
      res.send({ error });
    }
  }
);

async function getPokemonList(size = 10, offset = 0) {
  console.log({ size, offset });
  const url =
    'https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=' + size;
  console.log('url', url);
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
