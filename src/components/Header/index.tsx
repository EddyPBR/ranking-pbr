import { FC, useCallback } from "react";
import { BiCopy } from "react-icons/bi";

import {
  Flex,
  Center,
  Spacer,
  Tooltip,
  Button,
  useToast,
  useClipboard,
  Skeleton,
  Box,
  Container,
} from "@chakra-ui/react";
import { Profile } from "~components/Profile";

export type HeaderProps = {
  roomId?: string;
};

const Header: FC<HeaderProps> = ({ roomId }) => {
  const toast = useToast();
  const { onCopy } = useClipboard(roomId ?? "");

  const handleCopyRoomCode = useCallback(() => {
    toast({
      title: "Room code copied!",
      status: "info",
      isClosable: true,
    });

    onCopy();
  }, [onCopy, toast]);

  return (
    <Box backgroundColor="primary.500" height="4rem">
      <Container maxW="container.xl">
        <Flex>
          <Center>
            <Profile theme="dark" />
          </Center>

          <Spacer />

          <Center>
            {roomId ? (
              <Tooltip label="Copy room code">
                <Button
                  leftIcon={<BiCopy fontSize={18} />}
                  onClick={handleCopyRoomCode}
                  backgroundColor="white"
                >
                  {roomId}
                </Button>
              </Tooltip>
            ) : (
              <Skeleton height="2rem" width="14rem" />
            )}
          </Center>
        </Flex>
      </Container>
    </Box>
  );
};

export { Header };
