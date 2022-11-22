import { Roboto } from "@next/font/google";

import type { FC } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const GlobalStyleComponent: FC = () => {
  return (
    <style jsx global>
      {`
        :root {
          --font-roboto: ${roboto.style.fontFamily};
        }
      `}
    </style>
  );
};
