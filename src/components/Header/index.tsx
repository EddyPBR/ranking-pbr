import { FC, useCallback, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Profile } from "~components/Profile";

export type HeaderProps = {
  roomId?: string;
  isLoading?: boolean;
  canCreateRoom?: boolean;
};

const Header: FC<HeaderProps> = ({ roomId, isLoading, canCreateRoom }) => {
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

  const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] =
    useState<boolean>(false);

  if (isLoading) {
    return (
      <Box backgroundColor="primary.500" height="4rem">
        <Container maxW="container.xl" height="100%">
          <Flex height="100%">
            <Center>
              <Profile theme="dark" isLoading />
            </Center>

            <Spacer />

            <Center>
              <Skeleton height="2rem" width="14rem" />
            </Center>
          </Flex>
        </Container>
      </Box>
    );
  }

  return (
    <>
      <Box backgroundColor="primary.500" height="4rem">
        <Container maxW="container.xl" height="100%">
          <Flex height="100%">
            <Center>
              <Profile theme="dark" />
            </Center>

            <Spacer />

            {canCreateRoom && (
              <Button
                colorScheme="green"
                leftIcon={<AiOutlinePlus fontSize={18} />}
                onClick={() => {
                  setIsCreateRoomModalOpen(true);
                }}
              >
                New room
              </Button>
            )}

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
          </Flex>
        </Container>
      </Box>

      <Modal
        isCentered
        isOpen={isCreateRoomModalOpen}
        onClose={() => setIsCreateRoomModalOpen(true)}
      >
        <ModalOverlay
          bg="rgba(0,0,0,.75)"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Crete room</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="room">Room&apos;s title</FormLabel>
              <Input id="room" type="text" placeholder="Input room's name" />
            </FormControl>
          </ModalBody>
          <ModalFooter gap="2">
            <Button
              variant="ghost"
              colorScheme="red"
              onClick={() => setIsCreateRoomModalOpen(true)}
            >
              Cancel
            </Button>
            <Button type="submit" colorScheme="green">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { Header };
