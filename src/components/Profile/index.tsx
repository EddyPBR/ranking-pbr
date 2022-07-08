import { FC, useState } from "react";
import { AiOutlinePoweroff } from "react-icons/ai";

import {
  Stack,
  Avatar,
  Text,
  Heading,
  MenuButton,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

type ProfileProps = {
  theme?: "light" | "dark";
  canChangeRoomName?: boolean;
  canCloseRoom?: boolean;
  canBackToProfile?: boolean;
  canLogout?: boolean;
  showLogoutDivider?: boolean;
};

const Profile: FC<ProfileProps> = ({
  theme = "light",
  canChangeRoomName = true,
  canCloseRoom = true,
  canBackToProfile = true,
  canLogout = true,
  showLogoutDivider = true,
}) => {
  const [isChangeRoomTitleModalOpen, setIsChangeRoomTitleModalOpen] =
    useState<boolean>(false);

  const onChangeRoomTitleModalOpen = (value: boolean) => {
    setIsChangeRoomTitleModalOpen(value);
  };

  const [isCloseRoomModalOpen, setIsCloseRoomModalOpen] =
    useState<boolean>(false);

  const onChangeCloseRoomModalOpen = (value: boolean) => {
    setIsCloseRoomModalOpen(value);
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          colorScheme="transparent"
          height="4rem"
          padding="0"
        >
          <Stack direction={["column", "row"]} alignItems="center">
            <Avatar size="md" name="Nome do usuário" src="" />
            <Stack direction={["column", "column"]} spacing="0">
              <Text
                size="sm"
                color={`${theme === "light" ? "gray.700" : "gray.200"}`}
                textAlign="left"
                fontWeight="normal"
              >
                Bem-vindo(a),
              </Text>
              <Heading
                size="sm"
                color={`${theme === "light" ? "gray.700" : "white"}`}
              >
                Nome do usuário
              </Heading>
            </Stack>
          </Stack>
        </MenuButton>
        <MenuList zIndex="2">
          {canChangeRoomName && (
            <MenuItem onClick={() => onChangeRoomTitleModalOpen(true)}>
              Change room&apos;s title
            </MenuItem>
          )}
          {canCloseRoom && (
            <MenuItem onClick={() => onChangeCloseRoomModalOpen(true)}>
              Close room
            </MenuItem>
          )}
          {canBackToProfile && (
            <NextLink href="/profile" passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <MenuItem>Profile</MenuItem>
              </Link>
            </NextLink>
          )}
          {showLogoutDivider && <MenuDivider />}
          {canLogout && (
            <MenuItem icon={<AiOutlinePoweroff fontSize={16} />}>
              Logout
            </MenuItem>
          )}
        </MenuList>
      </Menu>

      <Modal
        isCentered
        isOpen={isChangeRoomTitleModalOpen}
        onClose={() => onChangeRoomTitleModalOpen(false)}
      >
        <ModalOverlay
          bg="rgba(0,0,0,.75)"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Change room&apos;s title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="room">Room&apos;s title</FormLabel>
              <Input id="room" type="text" placeholder="Input room's title" />
            </FormControl>
          </ModalBody>
          <ModalFooter gap="2">
            <Button
              variant="ghost"
              colorScheme="red"
              onClick={() => onChangeRoomTitleModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" colorScheme="green">
              Change
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        isOpen={isCloseRoomModalOpen}
        onClose={() => onChangeCloseRoomModalOpen(false)}
      >
        <ModalOverlay
          bg="rgba(0,0,0,.75)"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Close room</ModalHeader>
          <ModalCloseButton />
          <ModalBody width="100%">
            <Heading
              as="strong"
              fontSize="xl"
              textAlign="center"
              lineHeight="2rem"
            >
              Do you want to close the room?
            </Heading>
            <Text>Once completed, the process cannot be reverted</Text>
          </ModalBody>
          <ModalFooter gap="2">
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => onChangeCloseRoomModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" colorScheme="red">
              Close room
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { Profile };
