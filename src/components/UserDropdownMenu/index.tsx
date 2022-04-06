import { useState, useRef, FC } from "react";
import Skeleton from "react-loading-skeleton";

import { ChangeRoomTitleModal } from "@components/ChangeRoomTitleModal";
import { useAuth } from "@hooks/useAuth";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import Image from "next/image";
import { useRouter } from "next/router";

interface UserDropdownMenuProps {
  inRoom?: boolean;
}

const UserDropdownMenu: FC<UserDropdownMenuProps> = ({ inRoom }) => {
  const { user, signOutWithGoogle } = useAuth();
  const router = useRouter();

  const userDropdownMenuRef = useRef<HTMLDivElement | null>(null);

  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showChangeTitleModal, setShowChangeTitleModal] =
    useState<boolean>(false);

  useOnClickOutside(userDropdownMenuRef, () => setShowDropdown(false));

  const handleLogoutWithGoogleAndRedirect = async () => {
    await signOutWithGoogle();
    router.push("/");
  };

  if (!user) {
    return (
      <div className="flex gap-2 items-center">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div>
          <Skeleton className="w-28 h-4" />
          <Skeleton className="w-36 h-5" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-max" ref={userDropdownMenuRef}>
      <button
        id="dropdown-menu"
        className="flex items-center py-1 px-1"
        type="button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div
          className={`border-2 ${
            inRoom ? "border-white" : "border-indigo-500"
          } rounded-full flex items-center justify-center w-14 sm:w-12`}
        >
          <Image
            src={user.avatar}
            alt={user.username}
            width={50}
            height={50}
            className="rounded-full px-2 py-2"
          />
        </div>

        <div className="flex flex-col ml-2 ">
          <span
            className={`${
              inRoom ? "text-gray-200" : "text-gray-500"
            } font-sans text-xs md:text-sm text-left`}
          >
            welcome,
          </span>
          <strong
            className={`${
              inRoom ? "text-gray-100" : "text-gray-600"
            } font-cursive text-xs sm:text-base text-left font-normal`}
          >
            {user.username}
          </strong>
        </div>
      </button>

      <div
        className={`${
          showDropdown ? null : "hidden"
        } w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute`}
      >
        {inRoom && (
          <ul className="py-1" aria-labelledby="dropdown-menu">
            <li>
              <button
                type="button"
                onClick={() => setShowChangeTitleModal(true)}
                className="block py-2 px-4 w-full text-left text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Change room&apos;s name
              </button>
            </li>
            <li>
              <button
                type="button"
                className="block py-2 px-4 w-full text-left text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Add offline player
              </button>
            </li>
            <li>
              <button
                type="button"
                className="block py-2 px-4 w-full text-left text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Close room
              </button>
            </li>
          </ul>
        )}
        <div className="py-1">
          <button
            type="button"
            className="block py-2 px-4 w-full text-left text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={handleLogoutWithGoogleAndRedirect}
          >
            Logout
          </button>
        </div>
      </div>

      <ChangeRoomTitleModal
        isOpen={showChangeTitleModal}
        handleCloseModal={() => setShowChangeTitleModal(false)}
      />
    </div>
  );
};

export { UserDropdownMenu };
