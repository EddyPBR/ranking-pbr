import type { NextPage } from "next";

import NextImage from "next/image";

import {
  Layout,
  Row,
  Col,
  Card,
  Typography,
  Form,
  Input,
  Button,
  message,
  Divider,
} from "antd";
import { useState } from "react";
import { ButtonLoginGoogle } from "~components/ButtonLoginGoogle";

type FormType = {
  room_code: string;
};

const Page: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEnterInRoom = async ({ room_code }: FormType) => {
    try {
      setIsLoading(true);
      // ... create request
      alert("Código da sala: " + room_code);
    } catch (error: any) {
      message.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Content>
        <Row justify="space-around" align="middle" style={{ height: "100vh" }}>
          <Col span={8} offset={4}>
            <NextImage
              src="/players-game.svg"
              alt="Ilustração de jogadores torcendo"
              width={512}
              height={408}
            />
          </Col>
          <Col span={8} offset={4}>
            <Card style={{ width: 420 }}>
              <Typography.Title
                level={3}
                style={{ textAlign: "center", marginBottom: "1.5rem" }}
              >
                Entrar na sala
              </Typography.Title>

              <Form<FormType> layout="vertical" onFinish={handleEnterInRoom}>
                <Form.Item
                  name="room_code"
                  label="Código da sala:"
                  rules={[
                    {
                      required: true,
                      message: "Código da sala é obrigatório",
                    },
                  ]}
                >
                  <Input placeholder="Ex.: Ajs8agmas8" size="large" />
                </Form.Item>

                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={isLoading}
                  block
                >
                  Entrar na sala
                </Button>
              </Form>

              <Divider>
                <Typography.Text>OU</Typography.Text>
              </Divider>

              <ButtonLoginGoogle />
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default Page;
