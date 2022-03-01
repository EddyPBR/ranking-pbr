import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@contexts/AuthContext";
import type { AppProps } from "next/app";
import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
