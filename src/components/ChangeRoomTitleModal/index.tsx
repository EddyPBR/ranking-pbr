import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import ReactModal from "react-modal";

import { SuccessToast, ErrorToast } from "@components/Toasts";
import { useRoom } from "@hooks/useRoom";

type Props = {
  isOpen: boolean;
  handleCloseModal: () => void;
};

type FormInputs = {
  roomTitle: string;
};

const ChangeRoomTitleModal: FC<Props> = ({ isOpen, handleCloseModal }) => {
  const { handleSubmit, register } = useForm<FormInputs>();
  const { changeRoomTitle, room, roomId } = useRoom();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeRoomTitle = async ({ roomTitle }: FormInputs) => {
    if (!roomId) {
      return;
    }

    setIsLoading(true);

    try {
      await changeRoomTitle(roomId, roomTitle);
      SuccessToast({ message: "Room's title was changed" });
    } catch (error: any) {
      ErrorToast({ message: error?.message ?? "Unknown error occurs" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      contentLabel="Change room's title"
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-50"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex items-center justify-center"
    >
      <div className="relative flex flex-col bg-gray-50 rounded px-12 py-8 items-center justify-center max-w-lg w-full h-80">
        <header className="position absolute top-8 px-8 flex justify-between w-full">
          <strong className="text-gray-500">Change room&apos;s title</strong>
          <button
            type="button"
            onClick={handleCloseModal}
            aria-label="Not change room's title"
            className="top-4 right-4 rounded-full border px-1 py-1 bg-white border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-700 transition-colors"
          >
            <AiOutlineClose size={16} />
          </button>
        </header>

        <form
          className="flex flex-col gap-4 w-full mt-12"
          onSubmit={handleSubmit(handleChangeRoomTitle)}
        >
          <div className="flex flex-col gap-0.5">
            <label
              htmlFor="roomTitle"
              className="text-gray-500 cursor-pointer w-fit"
            >
              Room&apos;s Title
            </label>
            <input
              id="roomTitle"
              type="text"
              placeholder={room?.title}
              className="h-12 w-full border bg-white border-gray-300 rounded px-4 text-gray-600"
              autoComplete="off"
              {...register("roomTitle")}
            />
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button
              type="submit"
              disabled={isLoading || !roomId}
              className="bg-indigo-500 hover:bg-indigo-600 h-12 w-36 rounded shadow text-white transition-colors disabled:cursor-not-allowed disabled:hover:bg-indigo-500"
            >
              Change title
            </button>
            <button
              type="button"
              onClick={handleCloseModal}
              className="bg-none h-min text-sm text-red-500 hover:text-red-600 py-0 px-0 hover:underline disabled:cursor-not-allowed"
            >
              Don&apos;t change room&apos;s title
            </button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

export { ChangeRoomTitleModal };
