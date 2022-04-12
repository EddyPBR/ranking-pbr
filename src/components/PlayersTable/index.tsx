import type { FC } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";

import Image from "next/image";

type Player = {
  id: string;
  points: number;
  username: string;
  image_url?: string;
  isOfflinePlayer?: boolean;
};

interface PlayerTableProps {
  players: Player[];
}

const PlayersTable: FC<PlayerTableProps> = ({ players }) => {
  return (
    <div className="overflow-auto w-full max-h-[calc(100vh-24rem)] scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-thumb-roun">
      <table className="w-full">
        <thead>
          <tr>
            <th className="sticky z-10 top-0 px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-center sm:text-left text-xs font-semibold text-white uppercase">
              Position
            </th>
            <th className="sticky z-10 top-0 px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-center sm:text-left text-xs font-semibold text-white uppercase">
              Player
            </th>
            <th className="sticky z-10 top-0 px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-center sm:text-left text-xs font-semibold text-white uppercase">
              Points
            </th>
            <th className="hidden sm:table-cell sticky z-10 top-0 px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-white uppercase" />
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => {
            return (
              <tr
                key={index}
                className="bg-white hover:bg-gray-100 transition-colors"
              >
                <td className="px-5 py-5 border-b border-gray-200 text-sm text-center sm:text-left text-gray-700">
                  {index + 1}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm text-center sm:text-left text-gray-700">
                  <div className="flex items-center flex-col sm:flex-row">
                    <Image
                      src={player.image_url ?? "/assets/profile-default.svg"}
                      alt={player.username}
                      width="44"
                      height="44"
                      className="rounded-full"
                    />
                    <p className="ml-2 text-md text-center sm:text-left">
                      {player.username}
                    </p>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm text-center sm:text-left font-semibold text-gray-700">
                  {player.points}
                </td>
                <td className="hidden sm:table-cell px-5 py-5 border-b border-gray-200 text-gray-700">
                  <div className="flex gap-x-4">
                    <button
                      type="button"
                      className="py-2 px-2 bg-lime-500 rounded cursor:pointer hover:bg-lime-600 transition-colors"
                    >
                      <TiPlus size={18} className="text-white" />
                    </button>
                    <button
                      type="button"
                      className="py-2 px-2 bg-red-500 rounded cursor:pointer hover:bg-red-600 transition-colors"
                    >
                      <TiMinus size={18} className="text-white" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { PlayersTable };
