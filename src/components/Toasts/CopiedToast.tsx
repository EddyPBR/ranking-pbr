import { toast } from "react-hot-toast";

type Props = {
  message: string;
  icon?: string;
};

const InfoToast = ({ message, icon }: Props) => {
  return toast.error(message, {
    style: {
      background: "#111827",
      color: "#FFF",
    },
    icon,
  });
};

export { InfoToast };
