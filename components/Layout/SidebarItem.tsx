import useLoginModal from "@/Hooks/UseLoginModel";
import useCurrentUser from "@/Hooks/useCurrentUser";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label?: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}
export const SideBarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}) => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick;
    }
    if (auth && !currentUser) {
      loginModal.onOpen();
    }
    if (href) router.push(href);
  }, [router, onClick, href, auth, currentUser, loginModal]);
  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="relative rounded-full h-15 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-500 hover:bg-opacity-10 cursor-pointer">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};
