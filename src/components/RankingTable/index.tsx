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
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";

export type RankingTableProps = {
  isLoading?: boolean;
  quantityLoadingItems?: number;
};

const RankingTable: FC<RankingTableProps> = ({
  isLoading,
  quantityLoadingItems = 5,
}) => {
  const loadingItems: null[] = new Array(quantityLoadingItems).fill(null);

  return (
    <TableContainer
      maxHeight="calc(100vh - 128px)"
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
          {isLoading
            ? loadingItems.map((_, index) => (
                <Tr key={index}>
                  <Td>
                    <Skeleton
                      width="100%"
                      maxWidth="3rem"
                      height="1.5rem"
                      margin="0 auto"
                    />
                  </Td>
                  <Td>
                    <Flex gap="0.5rem" alignItems="center">
                      <SkeletonCircle size="10" />
                      <Skeleton width="100%" maxWidth="12rem" height="1.5rem" />
                    </Flex>
                  </Td>
                  <Td>
                    <Skeleton width="100%" maxWidth="3rem" height="1.5rem" />
                  </Td>
                </Tr>
              ))
            : Array(50)
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
