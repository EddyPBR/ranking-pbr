import { FC } from "react";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export type CreateRoomModal = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateRoomModal: FC<CreateRoomModal> = ({ isOpen, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="rgba(0,0,0,.75)"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>Create room</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="room">Room&apos;s title</FormLabel>
            <Input id="room" type="text" placeholder="Input room's name" />
          </FormControl>
        </ModalBody>
        <ModalFooter gap="2">
          <Button variant="ghost" colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" colorScheme="green">
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
