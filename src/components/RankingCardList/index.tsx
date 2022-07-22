import { FC } from "react";

import {
  Avatar,
  AvatarBadge,
  Box,
  Circle,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

export type RankingTableProps = {
  isLoading?: boolean;
};

export const RankingCardList: FC = () => {
  return (
    <Flex flexDirection="column" gap="0.5rem">
      {Array(50)
        .fill(null)
        .map((_, index, arr) => (
          <Box
            key={index}
            bg="white"
            boxShadow="md"
            w="100%"
            padding="0.75rem"
            borderRadius={2}
            borderWidth={1}
            borderColor="gray.200"
          >
            <Flex alignItems="center" gap="1rem" position="relative">
              <Avatar
                size="md"
                name={`A cool player ${index}`}
                src="/assets/profile-default.svg"
              >
                <AvatarBadge
                  borderColor="papayawhip"
                  bg="tomato"
                  boxSize="1em"
                />
              </Avatar>

              <VStack align="flex-start" paddingTop={2}>
                <Text
                  as="strong"
                  fontSize="md"
                  fontWeight="medium"
                  lineHeight="0.5rem"
                >
                  A cool player{index}
                </Text>
                <Text fontSize="sm">
                  <b>{arr.length - index}</b> Points
                </Text>
              </VStack>

              <Circle
                size="2rem"
                minWidth="min-content"
                position="absolute"
                bg="primary.500"
                right={0}
              >
                <Text fontSize="xl" padding="0.5rem" textColor="gray.100">
                  {index + 1}
                </Text>
              </Circle>
            </Flex>
          </Box>
        ))}
    </Flex>
  );
};
