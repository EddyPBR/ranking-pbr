import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { ConfigProvider } from "antd";

import "antd/dist/reset.css";
import { THEME } from "~styles/theme";
import { GlobalStyleComponent } from "~styles/GlobalStyleComponent";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ConfigProvider theme={THEME}>
      <GlobalStyleComponent />
      <Component {...pageProps} />
    </ConfigProvider>
  );
};

export default App;
