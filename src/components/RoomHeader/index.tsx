import { AiOutlineEye } from "react-icons/ai";

interface RoomHeaderProps {
  playersQuantity: number;
}

export function RoomHeader({ playersQuantity }: RoomHeaderProps) {
  return (
    <section className="w-full h-24 sm:h-16 bg-gray-900 rounded-t">
      <div className="container h-full px-4 py-2 flex items-center justify-center sm:justify-between flex-col sm:flex-row gap-2">
        <strong className="text-lg text-white uppercase">
          Edvaldo Junior&apos;s room
        </strong>

        <div className="text-white flex items-center gap-1">
          <AiOutlineEye size={24} />
          <span className="text-sm">
            Online players:
            <strong className="ml-1">{playersQuantity}</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
