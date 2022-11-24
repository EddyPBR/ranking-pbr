import type { NextPage } from "next";
import NextImage from "next/image";

import { Layout, Row, Col, theme, Typography, Avatar, Dropdown } from "antd";

import { FaPenAlt } from "react-icons/fa";
import { BsFillDoorOpenFill, BsFillLockFill } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";

const { useToken } = theme;

const Page: NextPage = () => {
  const { token } = useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Header style={{ backgroundColor: token.colorPrimary }}>
        <Row
          align="middle"
          justify="space-between"
          wrap={false}
          style={{ width: "100%" }}
        >
          <Col flex={1}>
            <Typography.Title level={3} style={{ color: "#FFF", margin: 0 }}>
              Nome da sala
            </Typography.Title>
          </Col>
          <Col>
            <Dropdown
              menu={{
                items: [
                  {
                    label: "Alterar nome da sala",
                    key: "changeRoomName",
                    icon: <FaPenAlt size={14} />,
                  },
                  {
                    label: "Sair da sala",
                    key: "leaveRoom",
                    icon: <BsFillDoorOpenFill size={14} />,
                  },
                  {
                    label: "Fechar a sala",
                    key: "closeRoom",
                    icon: <BsFillLockFill size={14} />,
                  },
                  {
                    type: "divider",
                  },
                  {
                    label: "Logout",
                    key: "logout",
                    icon: <AiOutlinePoweroff size={16} />,
                  },
                ],
              }}
            >
              <Avatar
                style={{
                  cursor: "pointer",
                  outline: "0.125rem solid #FFF",
                }}
                size={42}
                src={
                  <NextImage
                    src="https://avatars.githubusercontent.com/u/48658479?v=4"
                    alt="EddyPBR"
                    width={42}
                    height={42}
                    crossOrigin="anonymous"
                    style={{
                      padding: 1,
                      borderRadius: 9999,
                    }}
                  />
                }
                crossOrigin="anonymous"
                alt="EddyPBR"
              />
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    </Layout>
  );
};

export default Page;
