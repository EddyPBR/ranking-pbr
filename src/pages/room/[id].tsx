import { useState, useEffect } from "react";

import { Header } from "@components/Header";
import { PlayersTable } from "@components/PlayersTable";
import { RoomHeader } from "@components/RoomHeader";
import { SEO } from "@components/SEO";
import { useAuth } from "@hooks/useAuth";
import { useRoom } from "@hooks/useRoom";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const examplePlayers = [
  {
    image_url:
      "https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo",
    username: "Edvaldo Junior",
    points: 30,
  },
  {
    image_url:
      "https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo",
    username: "Edvaldo Junior",
    points: 27,
  },
  {
    image_url:
      "https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo",
    username: "Edvaldo Junior",
    points: 24,
  },
  {
    image_url:
      "https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo",
    username: "Edvaldo Junior",
    points: 12,
  },
  {
    image_url:
      "https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo",
    username: "Edvaldo Junior",
    points: 12,
  },
  {
    image_url:
      "https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo",
    username: "Edvaldo Junior",
    points: 12,
  },
  {
    image_url:
      "https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo",
    username: "Edvaldo Junior",
    points: 12,
  },
  {
    image_url:
      "https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo",
    username: "Edvaldo Junior",
    points: 12,
  },
  {
    image_url:
      "https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo",
    username: "Edvaldo Junior",
    points: 12,
  },
  {
    image_url:
      "https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo",
    username: "Edvaldo Junior",
    points: 12,
  },
  {
    image_url:
      "https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo",
    username: "Edvaldo Junior",
    points: 12,
  },

  {
    image_url:
      "https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo",
    username: "Edvaldo Junior",
    points: 12,
  },
];

const Page: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { setRoomId, roomId, room } = useRoom();

  useEffect(() => {
    const roomId = router.query.id as string;

    if (!roomId) {
      return;
    }

    setRoomId(roomId);
  }, [router.query.id, setRoomId]);

  return (
    <>
      <SEO
        title="Room | Ranking PBR"
        description="Ranking PBR - Room created by someone"
      />

      <Header roomId={roomId} />

      <main className="container py-12 mx-auto w-full flex flex-col min-h-[calc(100vh-8rem)] justify-center align-center items-center px-4">
        <RoomHeader
          playersQuantity={examplePlayers.length}
          roomTitle={room?.title}
        />
        <PlayersTable players={examplePlayers} />
      </main>
    </>
  );
};

export default Page;
