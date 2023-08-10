import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";
import React, { useCallback } from "react";
import useLoginModal from "../../Hooks/UseLoginModel";

export const SideBarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const onclick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);
  return (
    <div onClick={onclick}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-50 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-r-full hover:bg-opacity-50 cursor-pointer transition bg-sky-500">
        <p
          className="
        hidden
        lg:block
        text-center
        font-semibold
        text-white
        text-[20px]
        "
        >
          Tweet
        </p>
      </div>
    </div>
  );
};
