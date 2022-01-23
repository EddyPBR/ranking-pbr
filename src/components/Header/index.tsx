import Image from "next/image";
import { BiCopy } from "react-icons/bi";

interface HeaderProps {
  image_url: string;
  username: string;
  room_id: string;
}

export function Header({ image_url, username, room_id }: HeaderProps) {
  return (
    <header className="h-20 bg-indigo-600 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <button className="flex items-center py-1 px-1">
          <div className="border-2 border-white rounded-full flex items-center justify-center">
            <Image
              src={image_url}
              alt={username}
              width="50"
              height="50"
              className="rounded-full px-2 py-2"
            />
          </div>

          <div className="flex flex-col ml-2">
            <span className="text-gray-200 font-sans text-sm text-left">welcome,</span>
            <strong className="text-gray-100 font-cursive">{username}</strong>
          </div>
        </button>
        
        <section>
          <button className="bg-white px-4 py-2 rounded flex items-center gap-2 text-sm hover:bg-gray-100 hover:cursor-copy">
            <BiCopy size={24} />
            {room_id}
          </button>
        </section>
      </div>
    </header>
  );
}