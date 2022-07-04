import { AiOutlinePlus } from "react-icons/ai";
import { BsDoorOpen, BsDoorClosed } from "react-icons/bs";

import {
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Center,
  Spacer,
  Button,
  List,
  ListItem,
  ListIcon,
  Divider,
  Link,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { Profile } from "~components/Profile";
import { SEO } from "~components/SEO";
import type { NextPage } from "next";
import NextLink from "next/link";

const Page: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SEO
        title="Profile | Ranking PBR"
        description="Ranking PBR - Scoring games or pranks online with your friends"
      />
      <Flex height="100vh">
        <Center
          width="90vw"
          maxWidth="720"
          margin="0 auto"
          flexDirection="column"
          gap="2rem"
        >
          <Flex width="100%">
            <Profile
              canChangeRoomName={false}
              canCloseRoom={false}
              showLogoutDivider={false}
            />
            <Spacer />
            <Button
              colorScheme="green"
              leftIcon={<AiOutlinePlus fontSize={18} />}
              onClick={() => {
                onOpen();
              }}
            >
              New room
            </Button>
          </Flex>
          <Flex width="100%" flexDirection="column">
            <Heading size="sm">Created rooms</Heading>
            <List
              spacing={4}
              margin="1rem 0"
              minHeight="420"
              height="100vh"
              maxHeight="520"
              overflowY="auto"
            >
              <ListItem>
                <NextLink href="/room" passHref>
                  <Link>
                    <ListIcon as={BsDoorOpen} color="green.500" />
                    Title of the room
                  </Link>
                </NextLink>
                <Divider marginTop="0.225rem" />
              </ListItem>
              <ListItem>
                <NextLink href="/room" passHref>
                  <Link>
                    <ListIcon as={BsDoorOpen} color="green.500" />
                    Title of the room
                  </Link>
                </NextLink>
                <Divider marginTop="0.225rem" />
              </ListItem>
              <ListItem>
                <NextLink href="/room" passHref>
                  <Link>
                    <ListIcon as={BsDoorClosed} color="red.500" />
                    Title of the room
                  </Link>
                </NextLink>
                <Divider marginTop="0.225rem" />
              </ListItem>
            </List>
          </Flex>
        </Center>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
            <Button variant="ghost" colorScheme="red" onClick={onClose}>
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

export default Page;
