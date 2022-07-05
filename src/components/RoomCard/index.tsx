import { FC } from "react";

import {
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import NextLink from "next/link";

type Player = {
  email: string;
  avatar?: string;
};

type RoomCardProps = {
  createdAt: string;
  title: string;
  roomId: string;
  players: Player[];
  isRoomClosed?: boolean;
};

const RoomCard: FC<RoomCardProps> = ({
  createdAt,
  title,
  roomId,
  players,
  isRoomClosed = false,
}) => {
  const roomUrl = isRoomClosed ? "#closed" : "/room/" + roomId;

  return (
    <LinkBox
      width="100%"
      height="100%"
      borderWidth="1px"
      borderRadius="md"
      borderColor={isRoomClosed ? "red.200" : "gray.200"}
      overflow="hidden"
      background={isRoomClosed ? "red.50" : "white"}
      boxShadow="sm"
      padding="1.5rem"
      transition="transform .1s"
      _hover={{ transform: "scale(1.01)" }}
    >
      <NextLink href={roomUrl} passHref>
        <LinkOverlay cursor={isRoomClosed ? "not-allowed" : "pointer"}>
          <Text fontSize="sm" as="span" textColor="gray.600">
            {createdAt}
          </Text>

          <Heading
            as="strong"
            size="md"
            display="block"
            textColor="gray.700"
            lineHeight="1.75rem"
          >
            {title}
          </Heading>
          <AvatarGroup
            size="sm"
            max={3}
            marginTop="1rem"
            position="absolute"
            bottom="1.5rem"
            right="1.5rem"
          >
            {players.map((player, index) => (
              <Avatar key={index} name={player.email} src={player?.avatar} />
            ))}
          </AvatarGroup>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
};

export { RoomCard };
