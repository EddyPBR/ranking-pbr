import { Header } from "@components/Header";
import { PlayersTable } from "@components/PlayersTable";
import { RoomHeader } from "@components/RoomHeader";
import { SEO } from "@components/SEO";
import type { NextPage } from "next";

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
  return (
    <>
      <SEO
        title="Room | Ranking PBR"
        description="Ranking PBR - Room created by someone"
      />

      <Header
        image_url="https://lh3.googleusercontent.com/ogw/ADea4I4tzhTmtjLgaho1DvfmlZX1COOjTJJD5lpIT7IwnA=s32-c-mo"
        username="Edvaldo Junior"
        room_id="123e4567-e89b-12d3-a456-426614174000"
      />

      <main className="container py-12 mx-auto w-full flex flex-col min-h-[calc(100vh-8rem)] justify-center align-center items-center">
        <RoomHeader playersQuantity={examplePlayers.length} />
        <PlayersTable players={examplePlayers} />
      </main>
    </>
  );
};

export default Page;
