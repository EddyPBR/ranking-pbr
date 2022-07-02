import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    "900": "#171e66",
    "800": "#22278c",
    "700": "#3436b3",
    "600": "#4c4ad9",
    "500": "#6c63ff",
    "400": "#968cff",
    "300": "#beb5ff",
    "200": "#e3deff",
    "100": "#f3f0ff",
  },
};

const theme = extendTheme({ colors });

export { theme };
