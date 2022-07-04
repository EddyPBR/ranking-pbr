import { FC } from "react";
import { AiOutlinePoweroff } from "react-icons/ai";

import {
  Stack,
  Avatar,
  Text,
  Heading,
  MenuButton,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

type ProfileProps = {
  theme?: "light" | "dark";
  canChangeRoomName?: boolean;
  canCloseRoom?: boolean;
  canLogout?: boolean;
  showLogoutDivider?: boolean;
};

const Profile: FC<ProfileProps> = ({
  theme = "light",
  canChangeRoomName = true,
  canCloseRoom = true,
  canLogout = true,
  showLogoutDivider = true,
}) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="transparent"
        height="4rem"
        padding="0"
      >
        <Stack direction={["column", "row"]} alignItems="center">
          <Avatar size="md" name="Nome do usuário" src="" />
          <Stack direction={["column", "column"]} spacing="0">
            <Text
              size="sm"
              color={`${theme === "light" ? "gray.700" : "gray.200"}`}
              textAlign="left"
              fontWeight="normal"
            >
              Bem-vindo(a),
            </Text>
            <Heading
              size="sm"
              color={`${theme === "light" ? "gray.700" : "white"}`}
            >
              Nome do usuário
            </Heading>
          </Stack>
        </Stack>
      </MenuButton>
      <MenuList>
        {canChangeRoomName && <MenuItem>Change room&apos;s name</MenuItem>}
        {canCloseRoom && <MenuItem>Close room</MenuItem>}
        {showLogoutDivider && <MenuDivider />}
        {canLogout && (
          <MenuItem icon={<AiOutlinePoweroff fontSize={16} />}>Logout</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export { Profile };
