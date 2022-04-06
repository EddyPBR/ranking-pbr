import { useEffect, useState } from "react";

import { ErrorToast } from "@components/Toasts";
import { database } from "@services/firebase";

import { useAuth } from "./useAuth";

type RoomState = {
  authorId: string;
  title: string;
};

const useRoom = () => {
  const { user } = useAuth();

  const [roomId, setRoomId] = useState<string | undefined>();
  const [room, setRoom] = useState<RoomState | undefined>();
  const [isLoadingRoom, setIsLoadingRoom] = useState<boolean>(true);

  const createRoom = async (title: string) => {
    if (!user) {
      throw new Error("Unauthorized, please login!");
    }

    return await database.ref("rooms").push({ title, authorId: user.id });
  };

  const getRoom = async (roomId: string) => {
    if (!user) {
      throw new Error("Unauthorized, please login!");
    }

    return await database.ref(`rooms/${roomId}`).get();
  };

  const changeRoomTitle = async (roomId: string, title: string) => {
    if (!user || !roomId) {
      throw new Error("Unauthorized, please login!");
    }

    return await database.ref(`rooms/${roomId}`).update({
      title,
    });
  };

  useEffect(() => {
    if (!roomId) {
      return;
    }

    const getRoomAndSetState = async (roomId: string) => {
      setIsLoadingRoom(true);

      try {
        const roomSnapshot = await database.ref(`rooms/${roomId}`).get();
        const roomData: RoomState = roomSnapshot.val();
        setRoom(roomData);
      } catch (error: any) {
        ErrorToast(error?.message ?? "Unknown error occurs");
      } finally {
        setIsLoadingRoom(false);
      }
    };

    getRoomAndSetState(roomId);
  }, [roomId]);

  return {
    changeRoomTitle,
    isLoadingRoom,
    createRoom,
    getRoom,
    setRoomId,
    roomId,
    room,
  };
};

export { useRoom };
