import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { ErrorToast } from "@components/Toasters";
import { UserDropdownMenu } from "@components/UserDropdownMenu";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  room_title: string;
};

const createRoomSchema = yup
  .object({
    room_title: yup.string().min(3).max(255).required(),
  })
  .required();

const CreateRoom: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(createRoomSchema),
  });

  const handleCreateRoom: SubmitHandler<Inputs> = (inputs) => {
    console.log(inputs);
  };

  useEffect(() => {
    if (!errors.room_title?.message) {
      return;
    }

    toast.error(errors.room_title?.message, {
      style: {
        background: "#DC2626",
        color: "#FFF",
      },
    });
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
