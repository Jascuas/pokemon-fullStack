import { twMerge } from "tailwind-merge";

import { capitalizePokemonName } from "@/utils";

interface PokemonCardProps {
  name: string;
  imageUrl: string;
  types: string[];
  number: number;
  evolves_from?: string;
  hoverable?: boolean;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  imageUrl,
  types,
  number,
  evolves_from,
  hoverable,
}) => {
  return (
    <div className="flex flex-col rounded-md bg-gray-200 group">
      <a href={hoverable ? name : undefined}>
        <div className={twMerge(hoverable && " group-hover:opacity-75 ")}>
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-fill object-center lg:h-full"
          />
        </div>
        <div className="flex flex-col justify-between p-4 gap-3">
          <p className="text-base font-medium text-gray-900 ">
            ID / {number} - {capitalizePokemonName(name)}
          </p>
          <div className="flex gap-3">
            {types.map((type) => (
              <span
                key={type}
                className="border border-slate-400 text-slate-400 px-3 py-1 text-xs rounded-lg"
              >
                {type.toUpperCase()}
              </span>
            ))}
          </div>
          {evolves_from && (
            <div
              className="bg-sky-100 border-l-4 border-sky-400 text-sky-800 p-2 px-4 rounded-md text-"
              role="alert"
            >
              <p className="font-bold">Evolved from:</p>
              <p>{capitalizePokemonName(evolves_from)}</p>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default PokemonCard;
