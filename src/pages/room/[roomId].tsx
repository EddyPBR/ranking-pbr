import { useEffect, useState } from "react";

import { Box, Container } from "@chakra-ui/react";
import { Header } from "~components/Header";
import { RankingTable } from "~components/RankingTable";
import { SEO } from "~components/SEO";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  const [roomId, setRoomId] = useState<string>();

  useEffect(() => {
    if (!router.isReady) return;

    const { roomId } = router.query;

    if (!roomId) return;

    setRoomId(roomId as string);
  }, [router]);

  return (
    <>
      <SEO
        title="Room | Ranking PBR"
        description="Ranking PBR - Scoring games or pranks online with your friends"
      />
      <Box backgroundColor="primary.500" height="4rem">
        <Container maxW="container.xl">
          <Header roomId={roomId} isLoading />

          <RankingTable />
        </Container>
      </Box>
    </>
  );
};

export default Page;
