import { FC } from "react";

import {
  Flex,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

const RankingTable: FC = () => {
  return (
    <TableContainer
      marginTop="3rem"
      maxHeight="calc(100vh - 224px)"
      overflowY="auto"
      overflowX="auto"
    >
      <Table>
        <Thead position="sticky" top="0" backgroundColor="white" zIndex="1">
          <Tr>
            <Th textAlign="center" width="12%" minWidth="7.5rem">
              Position
            </Th>
            <Th>Player</Th>
            <Th width="20%" minWidth="10rem">
              Points
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array(50)
            .fill(null)
            .map((_, index, arr) => (
              <Tr key={index}>
                <Td textAlign="center">{index + 1}</Td>
                <Td>
                  <Flex alignItems="center" gap="0.5rem">
                    <Avatar
                      size="sm"
                      name={`A cool player ${index + 1}`}
                      src="/assets/profile-default.svg"
                    >
                      <AvatarBadge
                        borderColor="papayawhip"
                        bg="tomato"
                        boxSize="1em"
                      />
                    </Avatar>
                    A cool player{index + 1}
                  </Flex>
                </Td>
                <Td>{arr.length - index}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export { RankingTable };
