import { Button } from "@chakra-ui/react";
import { SEO } from "~components/SEO";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
      <SEO
        title="Ranking PBR"
        description="Ranking PBR - Scoring games or pranks online with your friends"
      />

      <Button colorScheme="primary" onClick={() => alert("Hello ranking PBR")}>
        Trigger
      </Button>
    </>
  );
};

export default Page;
