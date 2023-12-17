import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

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

const useGetPokemonDetails = () => {
  const router = useRouter();
  const { pokemon } = router.query;
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!pokemon) return;
      try {
        const detailsResponse = await fetch(
          process.env.NEXT_PUBLIC_POKEAPI_URL + pokemon.toString()
        );
        const detailsData = await detailsResponse.json();

        const speciesResponse = await fetch(detailsData.species.url);
        const speciesData = await speciesResponse.json();
        const evolvesFromSpecies = speciesData.evolves_from_species
          ? { name: speciesData.evolves_from_species.name }
          : undefined;
        const finalData = {
          ...detailsData,
          evolves_from_species: evolvesFromSpecies,
        };

        setPokemonDetails(finalData);

        setLoading(true);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemon();
  }, [pokemon]);

  return { pokemon: pokemonDetails, loading };
};

export default useGetPokemonDetails;

