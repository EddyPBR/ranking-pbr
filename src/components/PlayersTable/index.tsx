import Image from "next/image";
import { TiPlus, TiMinus } from "react-icons/ti";

interface Player {
  image_url?: string;
  username: string;
  points: number;
}

interface PlayerTableProps {
  players: Player[];
}

export function PlayersTable({ players }: PlayerTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase">Position</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase">Player</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase">Pontos</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase" />
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => {
          return (
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-700">{index + 1}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-700">
                <div className="flex items-center">
                  <Image
                    src={player.image_url ?? ""}
                    alt={player.username}
                    width="44"
                    height="44"
                    className="rounded-full"
                  />
                  <p className="ml-2 text-md">{player.username}</p>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-semibold text-gray-700">{player.points}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-gray-700">
                <div className="flex gap-x-4">
                  <button type="button" className="py-2 px-2 bg-lime-500 rounded cursor:pointer hover:bg-lime-600 transition-colors">
                    <TiPlus size={18} className="text-white" />
                  </button>
                  <button type="button" className="py-2 px-2 bg-red-500 rounded cursor:pointer hover:bg-red-600 transition-colors">
                    <TiMinus size={18} className="text-white" />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
