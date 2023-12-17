import BackButton from "@/components/BackButton";
import Loader from "@/components/Loader";
import PokemonCard from "@/components/PokemonCard";
import useGetPokemonDetails from "@/hooks/useGetPokemonDetails";

const backgroundURL = "/background.png";

export default function PokemonDetails() {
  const { pokemon, loading } = useGetPokemonDetails();
  return (
    <main
      className={
        "flex h-screen w-full bg-contain overflow-auto bg-scroll flex-col items-center justify-between"
      }
      style={{
        backgroundImage: `url(${backgroundURL})`,
      }}
    >
      <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8 lg:min-w-[400px] min-w-[300px]">
        <BackButton />

        {loading && pokemon ? (
          <PokemonCard
            key={pokemon?.name}
            number={pokemon?.id}
            name={pokemon?.name}
            imageUrl={pokemon?.sprites.front_default}
            types={pokemon?.types.map((type) => type.type.name)}
            evolves_from={pokemon.evolves_from_species?.name}
          />
        ) : (
          <Loader />
        )}
      </div>
    </main>
  );
}
