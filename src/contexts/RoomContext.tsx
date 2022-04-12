import type { FC } from "react";
import { useState, createContext } from "react";

import { ErrorToast, SuccessToast } from "@components/Toasts";
import { useAuth } from "@hooks/useAuth";
import { database } from "@services/firebase";
import { useRouter } from "next/router";

type Player = {
  id: string;
  points: number;
  username: string;
  image_url?: string;
  isOfflinePlayer?: boolean;
};

type Room = {
  id: string;
  authorId: string;
  title: string;
  isClosed?: boolean;
  players: Player[];
};

type RoomContextType = {
  room: Room | undefined;
  isLoadingRoom: boolean;
  handleCleanRoom: () => void;
  handleCloseRoom: () => Promise<void>;
  handleLoadRoom: (roomId: string) => Promise<void>;
  handleCreateRoom: (title: string) => Promise<void>;
  handleChangeRoomTitle: (title: string) => Promise<void>;
  handleAddOfflinePlayer: (name: string) => Promise<void>;
};

const RoomContext = createContext({} as RoomContextType);

const RoomProvider: FC = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  const [room, setRoom] = useState<Room | undefined>();
  const [isLoadingRoom, setIsLoadingRoom] = useState<boolean>(true);

  const handleLoadRoom = async (roomId: string) => {
    setIsLoadingRoom(true);

    const parsePlayersRecordToArray = (
      // eslint-disable-next-line prettier/prettier
      record: Record<string, Omit<Player, "id">>,
    ) => {
      const parsedObject = Object.entries(record).map(([key, values]) => {
        return {
          id: key,
          ...values,
        };
      });

      return parsedObject;
    };

    try {
      const roomSnapshot = await database.ref(`rooms/${roomId}`).get();

      const roomData = roomSnapshot.val();

      setRoom({
        ...roomData,
        id: roomId,
        players: roomData?.players
          ? parsePlayersRecordToArray(roomData.players)
          : [],
      });
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

      setRoom({ ...room, title });

      SuccessToast({ message: "Title was changed!" });
    } catch (error: any) {
      ErrorToast({ message: error?.message ?? "Failed to change title" });
    }
  };

  const handleCloseRoom = async () => {
    if (!user || !room?.id) {
      ErrorToast({ message: "Unauthorized, please login!" });
      return;
    }

    try {
      await database.ref(`rooms/${room.id}`).update({
        isClosed: true,
      });

      setRoom({ ...room, isClosed: true });
    } catch (error: any) {
      ErrorToast({ message: error?.message ?? "Failed to close room" });
    }
  };

  const handleCleanRoom = () => {
    setIsLoadingRoom(true);
    setRoom(undefined);
  };

  const handleAddOfflinePlayer = async (name: string) => {
    if (!user || !room?.id) {
      ErrorToast({ message: "Unauthorized, please login!" });
      return;
    }

    const newPlayer = {
      name,
      points: 0,
      isOfflinePlayer: true,
    };

    try {
      await database.ref(`rooms/${room.id}/players`).push({
        ...newPlayer,
      });

      SuccessToast({ message: "Player added!" });
    } catch (error: any) {
      ErrorToast({ message: error?.message ?? "Failed to add a player" });
    }
  };

  return (
    <RoomContext.Provider
      value={{
        room,
        isLoadingRoom,
        handleLoadRoom,
        handleCleanRoom,
        handleCloseRoom,
        handleCreateRoom,
        handleChangeRoomTitle,
        handleAddOfflinePlayer,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomContext, RoomConsumer };
