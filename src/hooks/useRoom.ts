import { database } from "@services/firebase";

import { useAuth } from "./useAuth";

const useRoom = () => {
  const { user } = useAuth();

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

  return {
    createRoom,
    getRoom,
  };
};

export { useRoom };
