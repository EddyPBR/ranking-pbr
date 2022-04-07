import { useContext } from "react";

import { RoomContext } from "@contexts/RoomContext";

const useRoom = () => {
  const value = useContext(RoomContext);
  return value;
};

export { useRoom };
