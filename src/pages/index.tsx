import { AiOutlineGoogle } from "react-icons/ai";
import type { NextPage } from "next";
import { MdDoubleArrow } from "react-icons/md";

import { SEO } from "@components/SEO";
import Image from "next/image";
import { useAuth } from "@hooks/useAuth";

const Page: NextPage = () => {
  const { signInWithGoogle } = useAuth();

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

        <article id="login" className="w-full sm:w-6/12 md:w-5/12 h-screen flex flex-col justify-center sm:bg-gray-50 px-8">
          <div className="max-w-sm w-full mx-auto flex flex-col">
            <button onClick={signInWithGoogle} className="bg-red-500 text-white h-12 font-sans rounded hover:bg-red-600 transition-colors font-bold flex items-center px-8 mb-12">
              <AiOutlineGoogle size={28} className="mr-6" />
              Create your room with google
            </button>

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
              className="bg-gwhite border-2 h-12 px-4 mb-4 font-sans rounded border-indigo-100"
            />
            <button type="button" className="bg-indigo-600 text-white h-12 font-sans rounded hover:bg-indigo-700 mt-2 transition-colors" aria-label="enter the room">
              Entrar na sala
            </button>
          </div>
        </article>
      </main>
    </>
  );
};

export default Page;
