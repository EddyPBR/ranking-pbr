import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import ReactModal from "react-modal";

import { ErrorToast } from "@components/Toasts";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRoom } from "@hooks/useRoom";
import * as yup from "yup";

type Props = {
  isOpen: boolean;
  handleCloseModal: () => void;
};

type Inputs = {
  name: string;
};

const offlinePlayerSchema = yup
  .object({
    name: yup.string().trim().min(3).max(100).required(),
  })
  .required();

const AddOfflinePlayerModal: FC<Props> = ({ isOpen, handleCloseModal }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(offlinePlayerSchema),
  });
  const { handleAddOfflinePlayer, room, isLoadingRoom } = useRoom();

  const handleSubmitRoomTitle = async ({ name }: Inputs) => {
    await handleAddOfflinePlayer(name);
    handleCloseModal();
  };

  const canSubmit = () => !isLoadingRoom && !!room?.id;

  useEffect(() => {
    if (!errors.name?.message) {
      return;
    }

    ErrorToast({ message: errors.name?.message });
  }, [errors]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      contentLabel="Add offline player"
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-50"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex items-center justify-center"
    >
      <div className="relative flex flex-col bg-gray-50 rounded px-12 py-8 items-center justify-center max-w-lg w-full h-80">
        <header className="position absolute top-8 px-8 flex justify-between w-full">
          <strong className="text-gray-500">Add offline player</strong>
          <button
            type="button"
            onClick={handleCloseModal}
            aria-label="Not add offline player"
            className="top-4 right-4 rounded-full border px-1 py-1 bg-white border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-700 transition-colors"
          >
            <AiOutlineClose size={16} />
          </button>
        </header>

        <form
          className="flex flex-col gap-4 w-full mt-12"
          onSubmit={handleSubmit(handleSubmitRoomTitle)}
        >
          <div className="flex flex-col gap-0.5">
            <label
              htmlFor="name"
              className="text-gray-500 cursor-pointer w-fit"
            >
              Player name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Jane Doe"
              className="h-12 w-full border bg-white border-gray-300 rounded px-4 text-gray-600"
              autoComplete="off"
              {...register("name")}
            />
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button
              type="submit"
              disabled={!canSubmit()}
              className="bg-indigo-500 hover:bg-indigo-600 h-12 w-36 rounded shadow text-white transition-colors disabled:cursor-not-allowed disabled:hover:bg-indigo-500"
            >
              Add player
            </button>
            <button
              type="button"
              onClick={handleCloseModal}
              className="bg-none h-min text-sm text-red-500 hover:text-red-600 py-0 px-0 hover:underline disabled:cursor-not-allowed"
            >
              Don&apos;t add player
            </button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

export { AddOfflinePlayerModal };
