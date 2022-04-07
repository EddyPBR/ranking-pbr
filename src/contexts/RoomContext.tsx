import type { FC } from "react";
import { useState, createContext } from "react";

import { ErrorToast, SuccessToast } from "@components/Toasts";
import { useAuth } from "@hooks/useAuth";
import { database } from "@services/firebase";
import { useRouter } from "next/router";

type Room = {
  id: string;
  authorId: string;
  title: string;
};

type RoomContextType = {
  room: Room | undefined;
  isLoadingRoom: boolean;
  handleLoadRoom: (roomId: string) => Promise<void>;
  handleCreateRoom: (title: string) => Promise<void>;
  handleChangeRoomTitle: (title: string) => Promise<void>;
};

const RoomContext = createContext({} as RoomContextType);

const RoomProvider: FC = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  const [room, setRoom] = useState<Room | undefined>();
  const [isLoadingRoom, setIsLoadingRoom] = useState<boolean>(true);

  const handleLoadRoom = async (roomId: string) => {
    setIsLoadingRoom(true);

    try {
      const roomSnapshot = await database.ref(`rooms/${roomId}`).get();

      const roomData: Room = roomSnapshot.val();

      setRoom({ ...roomData, id: roomId });
    } catch (error: any) {
      ErrorToast({ message: error?.message ?? "Failed to load room" });
    } finally {
      setIsLoadingRoom(false);
    }
  };

  const handleCreateRoom = async (title: string) => {
    if (!user) {
      ErrorToast({ message: "Unauthorized, please login!" });
      return;
    }

    try {
      const { key: roomId } = await database
        .ref("rooms")
        .push({ title, authorId: user.id });

      if (!roomId) {
        throw new Error("Not returned a key, please try again");
      }

      SuccessToast({ message: "Room created!" });

      router.push(`/room/${roomId}`);
    } catch (error: any) {
      ErrorToast({ message: error?.message ?? "Failed to create a room" });
    }
  };

  const handleChangeRoomTitle = async (title: string) => {
    if (!user || !room?.id) {
      ErrorToast({ message: "Unauthorized, please login!" });
      return;
    }

    try {
      await database.ref(`rooms/${room.id}`).update({
        title,
      });
    } catch (error: any) {
      ErrorToast({ message: error?.message ?? "Failed to change title" });
    }
  };

  return (
    <RoomContext.Provider
      value={{
        room,
        isLoadingRoom,
        handleLoadRoom,
        handleCreateRoom,
        handleChangeRoomTitle,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomContext, RoomConsumer };
