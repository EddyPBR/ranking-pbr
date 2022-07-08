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
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  AvatarBadge,
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

          <TableContainer
            marginTop="3rem"
            maxHeight="calc(100vh - 224px)"
            overflowY="auto"
            overflowX="auto"
          >
            <Table>
              <Thead
                position="sticky"
                top="0"
                backgroundColor="white"
                zIndex="1"
              >
                <Tr>
                  <Th textAlign="center" width="12%" minWidth="7.5rem">
                    Position
                  </Th>
                  <Th>Player</Th>
                  <Th width="20%" minWidth="10rem">
                    Points
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {Array(50)
                  .fill(null)
                  .map((_, index, arr) => (
                    <Tr key={index}>
                      <Td textAlign="center">{index + 1}</Td>
                      <Td>
                        <Flex alignItems="center" gap="0.5rem">
                          <Avatar
                            size="sm"
                            name={`A cool player ${index + 1}`}
                            src="/assets/profile-default.svg"
                          >
                            <AvatarBadge
                              borderColor="papayawhip"
                              bg="tomato"
                              boxSize="1em"
                            />
                          </Avatar>
                          A cool player{index + 1}
                        </Flex>
                      </Td>
                      <Td>{arr.length - index}</Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

export default Page;
