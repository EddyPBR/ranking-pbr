import type { FC } from "react";

import { UserDropdownMenu } from "@components/UserDropdownMenu";

const CreateRoom: FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <UserDropdownMenu />

      <form className="mb-6">
        <input
          type="text"
          id="room_title"
          name="room_title"
          placeholder="Room's title"
          aria-label="enter the title of your room"
          className="bg-white border w-full h-12 px-4 mb-4 font-sans rounded border-gray-300 outline-gray-500"
        />
        <button
          type="submit"
          className="bg-red-500 text-white h-12 w-full font-sans rounded hover:bg-red-600 transition-colors"
          aria-label="enter the room"
        >
          Create room
        </button>
      </form>
    </div>
  );
};

export { CreateRoom };
