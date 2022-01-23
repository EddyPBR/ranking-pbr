import type { NextPage } from "next";

import { SEO } from "@components/SEO";
import Image from "next/image";
import { AiOutlineGoogle } from "react-icons/ai";

const Page: NextPage = () => {
  return (
    <>
      <SEO
        title="Ranking PBR"
        description="Ranking PBR - Scoring games or pranks online with your friends"
      />

      <main className="w-full h-screen flex">
        <article className="w-8/12 h-full bg-indigo-600 flex flex-col justify-center">
          <h1 className="font-cursive text-5xl text-gray-50 mb-2 text-center">Welcome to Ranking PBR</h1>
          <p className="font-sans text-xl text-gray-100 text-center mb-12">Score pranks and games with your friends online</p>

          <Image 
            src="/assets/celebrating.svg" 
            alt="Welcome to Ranking PBR" 
            width="570" 
            height="480"
            loading="eager"
            priority
          />
        </article>

        <article className="w-4/12 h-full flex flex-col justify-center bg-gray-50 px-32">

          <button className="bg-red-500 text-white h-12 font-sans rounded hover:bg-red-600 transition-colors font-bold flex items-center px-8 mb-12">
            <AiOutlineGoogle size={28} className="mr-6" />
            Create your room with google
          </button>

          <div className="flex mb-6 w-full items-center">
            <hr className="w-6/12 bg-gray-700" />
            <span className="text-gray-500 w-full text-center">or enter in a room</span>
            <hr className="w-6/12 bg-gray-700" />
          </div>

          <input 
            type="text" 
            id="room_id" 
            name="room_id" 
            placeholder="Room code..."
            className="bg-gwhite border-2 h-12 px-4 mb-4 font-sans rounded border-indigo-100"
          />
          <button className="bg-indigo-600 text-white h-12 font-sans rounded hover:bg-indigo-700 transition-colors">Entrar na sala</button>
        </article>
      </main>
    </>
  );
};

export default Page;
