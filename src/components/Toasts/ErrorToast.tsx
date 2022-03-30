import { toast } from "react-hot-toast";

type Props = {
  message: string;
};

const ErrorToast = ({ message }: Props) => {
  return toast.error(message, {
    style: {
      background: "#DC2626",
      color: "#FFF",
    },
  });
};

export { ErrorToast };
