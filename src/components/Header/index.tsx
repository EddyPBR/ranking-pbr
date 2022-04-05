import type { FC } from "react";
import { toast } from "react-hot-toast";
import { BiCopy } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";

import { InfoToast } from "@components/Toasts/CopiedToast";
import { UserDropdownMenu } from "@components/UserDropdownMenu";
import { UserIconLogin } from "@components/UserIconLogin";
import { useAuth } from "@hooks/useAuth";

interface HeaderProps {
  roomId?: string;
}

const Header: FC<HeaderProps> = ({ roomId }) => {
  const { isLoggedIn } = useAuth();

  const handleCopyRoomCode = () => {
    if (!roomId) {
      return;
    }

    navigator.clipboard.writeText(roomId);

    InfoToast({ message: "Copiado para o clipboard!", icon: "📎" });
  };

  return (
    <header className="h-20 bg-indigo-600 flex items-center px-4">
      <div className="container mx-auto flex justify-between items-center gap-4">
        {isLoggedIn() ? <UserDropdownMenu inRoom /> : <UserIconLogin />}

        <button
          onClick={handleCopyRoomCode}
          className="bg-white px-4 py-2 rounded flex items-center gap-2 text-xs sm:text-sm hover:bg-gray-100 hover:cursor-copy disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          {roomId ? (
            <>
              <BiCopy size={24} />
              <span className="w-full h-4 overflow-y-hidden">{roomId}</span>
            </>
          ) : (
            <>
              <Skeleton className="w-5 h-5" />
              <Skeleton className="w-40 h-5" />
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export { Header };
