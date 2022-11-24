import type { FC } from "react";

import { Button, Space } from "antd";
import { AiOutlineGoogle } from "react-icons/ai";

import styles from "./styles.module.css";

export const ButtonLoginGoogle: FC = () => {
  return (
    <Button className={styles["google-button"]} type="primary" size="large" block>
      <Space>
        <AiOutlineGoogle size={24} />
        Criar sala com o Google
      </Space>
    </Button>
  );
};
