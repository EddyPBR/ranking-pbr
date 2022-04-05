import type { FC } from "react";
import { FcGoogle } from "react-icons/fc";

import { useAuth } from "@hooks/useAuth";

const UserIconLogin: FC = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <button
      onClick={signInWithGoogle}
      className="flex gap-2 items-center group"
    >
      <div className="bg-gray-200 rounded-full px-1 py-1 transition-colors group-hover:bg-white">
        <FcGoogle size={32} />
      </div>
      <strong className="text-gray-200 transition-colors group-hover:text-white">
        Fazer login
      </strong>
    </button>
  );
};

export { UserIconLogin };
