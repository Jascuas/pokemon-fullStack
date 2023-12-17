import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  evolves_from_species?: {
    name: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

const useGetPokemons = () => {
  const apiUrl = process.env.NEXT_PUBLIC_POKEAPI_URL || "";
  const [pokemonDetailsList, setPokemonDetailsList] = useState<
    PokemonDetails[]
  >([]);

  const [filteredPokemonList, setFilteredPokemonList] = useState<
    PokemonDetails[]
  >([]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const listResponse = await fetch(apiUrl);

        const listData = await listResponse.json();
        console.log(listData);
        const detailsPromises = listData.results?.map(
          async (pokemon: Pokemon) => {
            const detailsResponse = await fetch(apiUrl + pokemon.name);
            const detailsData = await detailsResponse.json();

            const speciesResponse = await fetch(detailsData.species.url);
            const speciesData = await speciesResponse.json();
            const evolvesFromSpecies = speciesData.evolves_from_species
              ? { name: speciesData.evolves_from_species.name }
              : undefined;
            return { ...detailsData, evolves_from_species: evolvesFromSpecies };
          }
        );

        const detailsData = await Promise.all(detailsPromises);
        setPokemonDetailsList(detailsData);
        setFilteredPokemonList(detailsData);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonList();
  }, []);

  useEffect(() => {
    const filterPokemonList = () => {
      const filteredList = pokemonDetailsList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPokemonList(filteredList);
    };

    filterPokemonList();
  }, [searchTerm, pokemonDetailsList]);

  return { pokemons: filteredPokemonList, loading, searchTerm, setSearchTerm };
};

export default useGetPokemons;
