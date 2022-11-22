import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "antd/dist/reset.css";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
