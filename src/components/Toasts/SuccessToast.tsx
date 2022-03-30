import { toast } from "react-hot-toast";

type Props = {
  message: string;
};

const SuccessToast = ({ message }: Props) => {
  return toast.success(message, {
    style: {
      background: "#4ADE80",
      color: "#FFF",
    },
  });
};

export { SuccessToast };
