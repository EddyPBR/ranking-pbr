import { BiCopy } from "react-icons/bi";

import { DropdownMenu } from "@components/DropdownMenu";

interface HeaderProps {
  image_url: string;
  username: string;
  room_id: string;
}

export function Header({ image_url, username, room_id }: HeaderProps) {
  return (
    <header className="h-20 bg-indigo-600 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <DropdownMenu image_url={image_url} username={username} />

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
