import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { SuccessToast, ErrorToast } from "@components/Toasts";
import { UserDropdownMenu } from "@components/UserDropdownMenu";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@hooks/useAuth";
import { useRoom } from "@hooks/useRoom";
import { useRouter } from "next/router";
import * as yup from "yup";

type Inputs = {
  room_title: string;
};

const createRoomSchema = yup
  .object({
    room_title: yup.string().trim().min(3).max(255).required(),
  })
  .required();

const CreateRoom: FC = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { createRoom } = useRoom();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(createRoomSchema),
  });

  const handleCreateRoom: SubmitHandler<Inputs> = async ({ room_title }) => {
    if (!user) {
      ErrorToast({ message: "You are not logged in!" });
      return;
    }

    try {
      const { key } = await createRoom(room_title);

      SuccessToast({ message: "room created with success!" });

      router.push(`room/${key}`);
    } catch (error: any) {
      ErrorToast({
        message: error?.message ?? "Failed to create",
      });
    }
  };

  useEffect(() => {
    if (!errors.room_title?.message) {
      return;
    }

    ErrorToast({ message: errors.room_title?.message });
  }, [errors]);

  return (
    <section className="flex flex-col">
      <div className="mx-auto mb-4">
        <UserDropdownMenu />
      </div>

      <form onSubmit={handleSubmit(handleCreateRoom)} className="mb-6 w-full">
        <input
          type="text"
          id="room_title"
          placeholder="Name of your room"
          aria-label="enter the title of your room"
          className="bg-white border w-full h-12 px-4 mb-5 font-sans rounded border-gray-300 outline-gray-500"
          {...register("room_title")}
        />
        <button
          type="submit"
          className="bg-red-500 text-white h-12 w-full font-sans rounded hover:bg-red-600 transition-colors"
          aria-label="create a room"
        >
          Create a room
        </button>
      </form>
    </section>
  );
};

export { CreateRoom };
