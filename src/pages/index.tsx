import { MdDoubleArrow } from "react-icons/md";

import { CreateRoom } from "@components/CreateRoom";
import { GoogleLoginButton } from "@components/GoogleLoginButton";
import { SEO } from "@components/SEO";
import { useAuth } from "@hooks/useAuth";
import type { NextPage } from "next";
import Image from "next/image";

const Page: NextPage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <SEO
        title="Ranking PBR"
        description="Ranking PBR - Scoring games or pranks online with your friends"
      />

      <main className="w-full min-h-screen flex flex-col sm:flex-row">
        <article className="w-full sm:w-6/12 md:w-7/12 h-screen bg-indigo-600 flex flex-col justify-center px-4 py-8">
          <h1 className="font-cursive text-4xl lg:text-5xl text-gray-50 mb-4 text-center">
            Welcome to Ranking PBR
          </h1>
          <p className="font-sans text-base lg:text-xl text-gray-100 text-center mb-12">
            Score pranks and games with your friends online
          </p>

          <Image
            src="/assets/celebrating.svg"
            alt="Welcome to Ranking PBR"
            width="570"
            height="480"
            loading="eager"
            priority
          />

          <a href="#login" className="animate-bounce mx-auto mt-32 sm:hidden">
            <MdDoubleArrow className="rotate-90 text-white text-5xl" />
          </a>
        </article>

        <article
          id="login"
          className="w-full sm:w-6/12 md:w-5/12 h-screen flex flex-col justify-center sm:bg-gray-50 px-8"
        >
          <div className="max-w-sm w-full mx-auto flex flex-col">
            {isLoggedIn() ? <CreateRoom /> : <GoogleLoginButton />}

            <div className="flex mb-6 w-full items-center">
              <hr className="w-6/12 bg-gray-700" />
              <span className="text-gray-500 w-full text-center">
                or enter in a room
              </span>
              <hr className="w-6/12 bg-gray-700" />
            </div>

            <input
              type="text"
              id="room_id"
              name="room_id"
              placeholder="Room code..."
              aria-label="enter the room code"
              className="bg-white border h-12 px-4 mb-4 font-sans rounded border-gray-3s00"
            />
            <button
              type="button"
              className="bg-indigo-600 text-white h-12 font-sans rounded hover:bg-indigo-700 mt-2 transition-colors"
              aria-label="enter the room"
            >
              Enter in a room
            </button>
          </div>
        </article>
      </main>
    </>
  );
};

export default Page;
