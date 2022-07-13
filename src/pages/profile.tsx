import { AiOutlinePlus } from "react-icons/ai";

import {
  Flex,
  Spacer,
  Button,
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
  Box,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Header } from "~components/Header";
import { Profile } from "~components/Profile";
import { RoomCard } from "~components/RoomCard";
import { SEO } from "~components/SEO";
import type { NextPage } from "next";

const Page: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SEO
        title="Profile | Ranking PBR"
        description="Ranking PBR - Scoring games or pranks online with your friends"
      />

      <Header />

      <Box marginTop="4.5rem">
        <Container maxW="container.xl">
          <Flex>
            <Profile
              canChangeRoomName={false}
              canCloseRoom={false}
              canBackToProfile={false}
              showLogoutDivider={false}
              isLoading
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

          <Grid
            templateColumns="repeat(auto-fill, minmax(18.25rem, 1fr))"
            gap={6}
            margin="4rem auto 0 auto"
          >
            <GridItem w="100%" h="12rem" position="relative">
              <RoomCard
                createdAt="Created 3 days ago"
                title="A great name for a room - is here!"
                roomId="73r78u23r-0owro0-129640"
                players={[
                  {
                    email: "player1@pbr.com",
                    avatar: "https://bit.ly/ryan-florence",
                  },
                  {
                    email: "player2@pbr.com",
                    avatar: "https://bit.ly/sage-adebayo",
                  },
                  {
                    email: "player3@pbr.com",
                    avatar: "https://bit.ly/kent-c-dodds",
                  },
                  {
                    email: "player4@pbr.com",
                    avatar: "https://bit.ly/prosper-baba",
                  },
                  {
                    email: "player5@pbr.com",
                    avatar: "https://bit.ly/code-beast",
                  },
                ]}
              />
            </GridItem>
            <GridItem w="100%" h="12rem" position="relative">
              <RoomCard
                createdAt="Created 3 days ago"
                title="A great name for a room - is here!"
                roomId="1q2w3e4r-213r21-213125"
                isRoomClosed
                players={[
                  {
                    email: "player1@pbr.com",
                    avatar: "https://bit.ly/ryan-florence",
                  },
                  {
                    email: "player2@pbr.com",
                    avatar: "https://bit.ly/sage-adebayo",
                  },
                  {
                    email: "player3@pbr.com",
                    avatar: "https://bit.ly/kent-c-dodds",
                  },
                  {
                    email: "player4@pbr.com",
                    avatar: "https://bit.ly/prosper-baba",
                  },
                  {
                    email: "player5@pbr.com",
                    avatar: "https://bit.ly/code-beast",
                  },
                ]}
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>
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
