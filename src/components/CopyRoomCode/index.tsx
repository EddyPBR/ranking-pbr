import { FC } from "react";
import { BiCopy } from "react-icons/bi";

import {
  Center,
  Tooltip,
  Button,
  useToast,
  useClipboard,
} from "@chakra-ui/react";

export type CopyRoomCodeProps = {
  roomId: string;
};

export const CopyRoomCode: FC<CopyRoomCodeProps> = ({ roomId }) => {
  const toast = useToast();
  const { onCopy } = useClipboard(roomId ?? "");

  const handleCopyRoomCode = () => {
    toast({
      title: "Room code copied!",
      status: "info",
      isClosable: true,
    });

    onCopy();
  };

  return (
    <Center>
      <Tooltip label="Copy room code">
        <Button
          leftIcon={<BiCopy fontSize={18} />}
          onClick={handleCopyRoomCode}
          backgroundColor="white"
        >
          {roomId}
        </Button>
      </Tooltip>
    </Center>
  );
};
