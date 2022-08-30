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

export type UpdateRoomModal = {
  isOpen: boolean;
  onClose: () => void;
};

export const UpdateRoomModal: FC<UpdateRoomModal> = ({ isOpen, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
          <Button variant="ghost" colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" colorScheme="green">
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
