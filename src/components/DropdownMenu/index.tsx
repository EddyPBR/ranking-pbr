import { useState } from "react";

import Image from "next/image";

interface DropdownMenuProps {
  image_url: string;
  username: string;
}

export function DropdownMenu({ image_url, username }: DropdownMenuProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <button
        id="dropdown-menu"
        className="flex items-center py-1 px-1"
        type="button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="border-2 border-white rounded-full flex items-center justify-center w-14 sm:w-12 ">
          <Image
            src={image_url}
            alt={username}
            width="50"
            height="50"
            className="rounded-full px-2 py-2"
          />
        </div>

        <div className="flex flex-col ml-2 ">
          <span className="text-gray-200 font-sans text-xs md:text-sm text-left">
            welcome,
          </span>
          <strong className="text-gray-100 font-cursive text-xs sm:text-base text-left">{username}</strong>
        </div>
      </button>

      <div
        id="dropdown-menu"
        className={`${
          showDropdown ? null : "hidden"
        } w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute`}
      >
        <ul className="py-1" aria-labelledby="dropdown-menu">
          <li>
            <button
              type="button"
              className="block py-2 px-4 w-full text-left text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Change room name
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
        <div className="py-1">
          <button
            type="button"
            className="block py-2 px-4 w-full text-left text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
