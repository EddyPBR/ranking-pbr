import type { FC } from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/router";

type FormInputs = {
  roomCode: string;
};

const EnterRoom: FC = () => {
  const router = useRouter();
  const { handleSubmit, register } = useForm<FormInputs>();

  const handleEnterRoom = ({ roomCode }: FormInputs) => {
    router.push(`/room/${roomCode}`);
  };

  return (
    <form onSubmit={handleSubmit(handleEnterRoom)} className="flex flex-col">
      <input
        type="text"
        id="roomCode"
        placeholder="Room code..."
        aria-label="enter the room code"
        className="bg-white border h-12 px-4 mb-4 font-sans rounded border-gray-300"
        {...register("roomCode", {
          required: true,
        })}
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white h-12 font-sans rounded hover:bg-indigo-700 mt-2 transition-colors"
        aria-label="enter the room"
      >
        Enter in a room
      </button>
    </form>
  );
};

export { EnterRoom };
