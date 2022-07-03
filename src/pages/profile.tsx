import { AiOutlinePlus } from "react-icons/ai";
import { BsDoorOpen, BsDoorClosed } from "react-icons/bs";

import {
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Center,
  Spacer,
  Button,
  List,
  ListItem,
  ListIcon,
  Divider,
  Link,
} from "@chakra-ui/react";
import { SEO } from "~components/SEO";
import type { NextPage } from "next";
import NextLink from "next/link";

const Page: NextPage = () => {
  return (
    <>
      <SEO
        title="Profile | Ranking PBR"
        description="Ranking PBR - Scoring games or pranks online with your friends"
      />
      <Flex height="100vh">
        <Center
          width="90vw"
          maxWidth="720"
          margin="0 auto"
          flexDirection="column"
          gap="2rem"
        >
          <Flex width="100%">
            <Stack direction={["column", "row"]} spacing="0.5rem">
              <Avatar size="md" name="Nome do usuário" src="" />
              <Stack direction={["column", "column"]} spacing="0">
                <Text size="sm" color="grey">
                  Bem-vindo(a),
                </Text>
                <Heading size="sm">Nome do usuário</Heading>
              </Stack>
            </Stack>
            <Spacer />
            <Button
              colorScheme="green"
              leftIcon={<AiOutlinePlus fontSize={18} />}
            >
              New room
            </Button>
          </Flex>
          <Flex width="100%" flexDirection="column">
            <Heading size="sm">Created rooms</Heading>
            <List
              spacing={4}
              margin="1rem 0"
              minHeight="420"
              height="100vh"
              maxHeight="520"
              overflowY="auto"
            >
              <ListItem>
                <NextLink href="/room" passHref>
                  <Link>
                    <ListIcon as={BsDoorOpen} color="green.500" />
                    Title of the room
                  </Link>
                </NextLink>
                <Divider marginTop="0.225rem" />
              </ListItem>
              <ListItem>
                <NextLink href="/room" passHref>
                  <Link>
                    <ListIcon as={BsDoorOpen} color="green.500" />
                    Title of the room
                  </Link>
                </NextLink>
                <Divider marginTop="0.225rem" />
              </ListItem>
              <ListItem>
                <NextLink href="/room" passHref>
                  <Link>
                    <ListIcon as={BsDoorClosed} color="red.500" />
                    Title of the room
                  </Link>
                </NextLink>
                <Divider marginTop="0.225rem" />
              </ListItem>
            </List>
          </Flex>
        </Center>
      </Flex>
    </>
  );
};

export default Page;
