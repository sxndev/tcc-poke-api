// essa pokelist é um componente Statefull pois trabalha com estado (useState) e também é responsável pela comunicação com a api PokeAPI
export async function getPokemonlist(offset) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Ocorreu um erro ao buscar os pokemons");
    }

    const json = await response.json();

    // depois de ter pegado todas as urls dos pokemons, eu uso o promise.all para percorrer o array de urls e fazer uma requisição para as 10 urls ao mesmo tempo
    const pokemons = await Promise.all(
      json.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);

        if (!response.ok) {
          throw new Error(`Erro ao buscar ${pokemon.name}`);
        }

        return response.json();
      })
    );

    return pokemons;
  } catch (err) {
    console.log(err);
  }
}

export async function getPokemonByData(pokeData) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeData}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Ocorreu um erro ao buscar os dados do pokemon");
    }

    const json = await response.json();
    return json;

  } catch (e) {
    console.log(e);
  }
}
