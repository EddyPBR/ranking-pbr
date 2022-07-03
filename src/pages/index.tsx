import { AiOutlineGoogle } from "react-icons/ai";

import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SEO } from "~components/SEO";
import type { NextPage } from "next";
import Image from "next/image";

const Page: NextPage = () => {
  return (
    <>
      <SEO
        title="Ranking PBR"
        description="Ranking PBR - Scoring games or pranks online with your friends"
      />

      <Flex height="100vh">
        <Box flex="1.225" bg="primary.600">
          <Center height="100%" flexDirection="column" padding="2rem">
            <Image
              src="/assets/celebrating.svg"
              alt="Score games online with your friends"
              width="512"
              height="512"
              priority
            />

            <Heading color="white" textAlign="center">
              Score games online with your friends
            </Heading>
          </Center>
        </Box>
        <Box flex="1">
          <Center
            height="100%"
            maxWidth={380}
            flexDirection="column"
            margin="0 auto"
          >
            <Button
              leftIcon={<AiOutlineGoogle size={24} />}
              variant="solid"
              color="white"
              colorScheme="red"
              size="lg"
              width="100%"
            >
              Create room with Google
            </Button>
            <Stack
              marginTop="3rem"
              direction={["column", "row"]}
              spacing="24px"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Divider width="25%" />
              <Text color="gray.400">or enter in a room</Text>
              <Divider width="25%" />
            </Stack>

            <Stack
              marginTop="3rem"
              direction={["column", "column"]}
              width="100%"
              gap="1rem"
            >
              <Input
                placeholder="Código da sala"
                size="lg"
                focusBorderColor="primary.500"
              />
              <Button
                variant="solid"
                color="white"
                colorScheme="primary"
                size="lg"
                width="100%"
              >
                Entrar na sala
              </Button>
            </Stack>
          </Center>
        </Box>
      </Flex>
    </>
  );
};

export default Page;
