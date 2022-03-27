import type { FC } from "react";

import { UserDropdownMenu } from "@components/UserDropdownMenu";

const CreateRoom: FC = () => {
  return (
    <section className="flex flex-col">
      <div className="mx-auto mb-4">
        <UserDropdownMenu />
      </div>

      <form className="mb-6 w-full">
        <input
          type="text"
          id="room_title"
          name="room_title"
          placeholder="Name of your room"
          aria-label="enter the title of your room"
          className="bg-white border w-full h-12 px-4 mb-5 font-sans rounded border-gray-300 outline-gray-500"
        />
        <button
          type="submit"
          className="bg-red-500 text-white h-12 w-full font-sans rounded hover:bg-red-600 transition-colors"
          aria-label="enter the room"
        >
          Create a room
        </button>
      </form>
    </section>
  );
};

export { CreateRoom };
