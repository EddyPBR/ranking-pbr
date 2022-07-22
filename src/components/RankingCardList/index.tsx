import { FC } from "react";

import {
  Avatar,
  AvatarBadge,
  Box,
  Circle,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";

export type RankingCardList = {
  isLoading?: boolean;
  quantityLoadingItems?: number;
};

export const RankingCardList: FC<RankingCardList> = ({
  isLoading,
  quantityLoadingItems = 5,
}) => {
  const loadingItems: null[] = new Array(quantityLoadingItems).fill(null);

  if (isLoading) {
    return (
      <Flex flexDirection="column" gap="0.75rem">
        {loadingItems.map((_, index) => (
          <Box
            key={index}
            bg="white"
            boxShadow="md"
            w="100%"
            padding="1rem"
            borderRadius={2}
            borderWidth={1}
            borderColor="gray.200"
          >
            <Flex gap="0.5rem" alignItems="center" position="relative">
              <SkeletonCircle size="3rem" />
              <VStack align="flex-start">
                <Skeleton width="6rem" maxWidth="12rem" height="1.125rem" />
                <Skeleton width="3.5rem" maxWidth="12rem" height="1rem" />
              </VStack>
              <SkeletonCircle size="2.5rem" position="absolute" right={0} />
            </Flex>
          </Box>
        ))}
      </Flex>
    );
  }

  return (
    <Flex flexDirection="column" gap="0.75rem">
      {Array(50)
        .fill(null)
        .map((_, index, arr) => (
          <Box
            key={index}
            bg="white"
            boxShadow="md"
            w="100%"
            padding="1rem"
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
                size="2.5rem"
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
