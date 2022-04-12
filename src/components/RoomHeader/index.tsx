import type { FC } from "react";
import { AiOutlineEye } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";

interface RoomHeaderProps {
  playersQuantity?: number;
  roomTitle?: string;
}

const RoomHeader: FC<RoomHeaderProps> = ({ playersQuantity, roomTitle }) => {
  return (
    <section className="w-full h-24 sm:h-16 bg-gray-900 rounded-t">
      <div className="container h-full px-4 py-2 flex items-center justify-center sm:justify-between flex-col sm:flex-row gap-2">
        {roomTitle ? (
          <strong className="text-lg text-white uppercase">{roomTitle}</strong>
        ) : (
          <Skeleton className="h-8 w-40" />
        )}

        <div className="text-white flex items-center gap-1">
          <AiOutlineEye size={24} />
          <span className="text-sm">players:</span>
          {playersQuantity ? (
            <strong className="ml-1">{playersQuantity}</strong>
          ) : (
            <Skeleton className="h-5 w-6" />
          )}
        </div>
      </div>
    </section>
  );
};

export { RoomHeader };
