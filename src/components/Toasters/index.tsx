import { toast } from "react-hot-toast";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

interface ErrorToastProps {
  title: string;
  message: string;
}

export const ErrorToast = ({ title, message }: ErrorToastProps) => {
  return toast.custom(() => (
    <article className="bg-white shadow-sm w-60 sm:w-80 h-auto px-4 py-4 rounded border-l-4 border-red-600">
      <div className="flex gap-2">
        <span className="rounded-full w-6 h-6 flex items-center justify-center">
          <AiOutlineCloseCircle size={24} className="text-red-600" />
        </span>

        <div className="flex flex-col">
          <strong className="text-gray-700 text-sm">{title}</strong>
          <p className="text-gray-500 text-xs">{message}</p>
        </div>
      </div>
    </article>
  ));
};

export const SuccessToast = ({ title, message }: ErrorToastProps) => {
  return toast.custom(() => (
    <article className="bg-white shadow-sm w-60 sm:w-80 h-auto px-4 py-4 rounded border-l-4 border-green-600">
      <div className="flex gap-2">
        <span className="rounded-full w-6 h-6 flex items-center justify-center">
          <AiOutlineCheckCircle size={24} className="text-green-600" />
        </span>

        <div className="flex flex-col">
          <strong className="text-gray-700 text-sm">{title}</strong>
          <p className="text-gray-500 text-xs">{message}</p>
        </div>
      </div>
    </article>
  ));
};
