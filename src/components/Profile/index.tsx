import type { ButtonHTMLAttributes, FC } from "react";

import Image from "next/image";

type Props = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "className"
> & {
  username: string;
  avatar: string;
  inRoom?: boolean;
  isWhite?: boolean;
};

const Profile: FC<Props> = ({ username, avatar, inRoom, isWhite, ...rest }) => {
  return (
    <button
      type="button"
      className="flex items-center py-1 px-1 sdf sdf sfd sd f"
      {...rest}
    >
      <div
        className={`border-2 ${
          inRoom ? "border-white" : "border-indigo-500"
        } rounded-full flex items-center justify-center w-14 sm:w-12`}
      >
        <Image
          src={avatar}
          alt={username}
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
          } font-cursive text-xs sm:text-base text-left`}
        >
          {username}
        </strong>
      </div>
    </button>
  );
};

export { Profile };
