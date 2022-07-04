import { useEffect, useState } from "react";
import { BiCopy } from "react-icons/bi";

import {
  Flex,
  Spacer,
  Center,
  useClipboard,
  Button,
  Tooltip,
  useToast,
  Box,
  Container,
} from "@chakra-ui/react";
import { Profile } from "~components/Profile";
import { SEO } from "~components/SEO";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  const toast = useToast();

  const [roomId, setRoomId] = useState<string | null>(null);
  const { onCopy } = useClipboard(roomId ?? "");

  useEffect(() => {
    if (!router.isReady) return;

    const { roomId } = router.query;

    if (!roomId) return;

    setRoomId(roomId as string);
  }, [router]);

  const handleCopyRoomCode = () => {
    toast({
      title: "Room code copied!",
      status: "info",
      isClosable: true,
    });

    onCopy();
  };

  return (
    <>
      <SEO
        title="Room | Ranking PBR"
        description="Ranking PBR - Scoring games or pranks online with your friends"
      />
      <Box backgroundColor="primary.500" height="4rem">
        <Container maxW="container.xl">
          <Flex>
            <Center>
              <Profile theme="dark" />
            </Center>

            <Spacer />

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
    </>
  );
};

export default Page;
