import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

import { ErrorToast } from "@components/Toasts";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as yup from "yup";

const enterRoomSchema = yup
  .object({
    room_title: yup.string().trim().min(3).max(100).required(),
  })
  .required();

type FormInputs = {
  room_title: string;
};

const EnterRoom: FC = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(enterRoomSchema),
  });

  const handleEnterRoom = ({ room_title }: FormInputs) => {
    router.push(`/room/${room_title}`);
  };

  useEffect(() => {
    if (!errors.room_title?.message) {
      return;
    }

    ErrorToast({ message: errors.room_title?.message });
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(handleEnterRoom)} className="flex flex-col">
      <input
        type="text"
        id="room_code"
        placeholder="Room code..."
        aria-label="enter the room code"
        className="bg-white border h-12 px-4 mb-4 font-sans rounded border-gray-300"
        {...register("room_title", {
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
