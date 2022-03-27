import { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { AuthProvider } from "@contexts/AuthContext";
import type { AppProps } from "next/app";
import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <SkeletonTheme>
        <Component {...pageProps} />
      </SkeletonTheme>
    </AuthProvider>
  );
}

export default MyApp;
