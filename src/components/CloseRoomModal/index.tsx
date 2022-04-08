import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import ReactModal from "react-modal";

import { useRoom } from "@hooks/useRoom";

type Props = {
  isOpen: boolean;
  handleCloseModal: () => void;
};

const CloseRoomModal: FC<Props> = ({ isOpen, handleCloseModal }) => {
  const { handleCloseRoom } = useRoom();

  const handleRequestCloseRoom = async () => {
    await handleCloseRoom();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      contentLabel="Close room"
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-50"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex items-center justify-center"
    >
      <div className="relative flex flex-col bg-gray-50 rounded px-12 py-8 items-center justify-center max-w-lg w-full h-80">
        <header className="position absolute top-8 px-8 flex justify-between w-full">
          <strong className="text-gray-500">CLOSE ROOM</strong>
          <button
            type="button"
            onClick={handleCloseModal}
            aria-label="Not change room's title"
            className="top-4 right-4 rounded-full border px-1 py-1 bg-white border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-700 transition-colors"
          >
            <AiOutlineClose size={16} />
          </button>
        </header>

        <div className="flex flex-col gap-4 w-full mt-12">
          <section className="flex flex-col items-center gap">
            <FiAlertTriangle size={24} className="text-red-500" />
            <h1 className="uppercase text-xl font-bold text-red-500 mt-1 text-center">
              WARNING
            </h1>
            <p className="text-gray-600 text-sm text-center mt-2 mb-4">
              Are you really wanting to close a room? no one will be able to
              access the room, including you
            </p>
          </section>

          <section className="flex items-center justify-center gap-4 mt-4">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 h-12 w-36 rounded shadow text-white transition-colors disabled:cursor-not-allowed disabled:hover:bg-red-500"
              onClick={handleRequestCloseRoom}
            >
              Close room
            </button>
            <button
              type="button"
              onClick={handleCloseModal}
              className="bg-none h-min text-sm text-indigo-500 hover:text-indigo-600 py-0 px-0 hover:underline disabled:cursor-not-allowed"
            >
              Don&apos;t close room
            </button>
          </section>
        </div>
      </div>
    </ReactModal>
  );
};

export { CloseRoomModal };
