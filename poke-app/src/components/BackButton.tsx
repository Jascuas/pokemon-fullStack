import { useRouter } from "next/router";

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = ({}) => {
  const router = useRouter();
  return (
    <button
      className="flex gap-4 items-center my-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md shadow"
      onClick={() => router.back()}
    >
      <img src="/icons/arrow-back-circle.svg" />
      <span>Return to Pokedex</span>
    </button>
  );
};

export default BackButton;
