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

  return {
    createRoom,
  };
};

export { useRoom };
