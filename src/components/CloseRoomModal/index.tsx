import { FC } from "react";

import {
  Button,
  Heading,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export type CloseRoomModal = {
  isOpen: boolean;
  onClose: () => void;
};

export const CloseRoomModal: FC<CloseRoomModal> = ({ isOpen, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
          <Button variant="ghost" colorScheme="blue" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" colorScheme="red">
            Close room
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
