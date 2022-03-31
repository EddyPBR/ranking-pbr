import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (!roomId) {
      return;
    }

    const getRoomAndSetState = async (roomId: string) => {
      const roomSnapshot = await database.ref(`rooms/${roomId}`).get();
      const roomData: RoomState = roomSnapshot.val();
      setRoom(roomData);
    };

    getRoomAndSetState(roomId);
  }, [roomId]);

  return {
    createRoom,
    getRoom,
    setRoomId,
    roomId,
    room,
  };
};

export { useRoom };
