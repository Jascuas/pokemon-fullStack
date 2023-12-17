import Loader from "@/components/Loader";
import PokemonCard from "@/components/PokemonCard";
import SearchInput from "@/components/SearchInput";
import useGetPokemons from "@/hooks/useGetPokemons";

const backgroundURL = "/background.png";

export default function Home() {
  const { pokemons, loading, searchTerm, setSearchTerm } = useGetPokemons();

  return (
    <main
      className={
        "flex h-screen w-full bg-contain overflow-auto bg-scroll flex-col items-center justify-between"
      }
      style={{
        backgroundImage: `url(${backgroundURL})`,
      }}
    >
      <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex  gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100">
            Pokedex
          </h2>
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={(value) => setSearchTerm(value)}
          />
        </div>

        {loading ? (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                hoverable={true}
                number={pokemon.id}
                name={pokemon.name}
                imageUrl={pokemon.sprites.front_default}
                types={pokemon.types.map((type) => type.type.name)}
                evolves_from={pokemon.evolves_from_species?.name}
              />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </main>
  );
}
