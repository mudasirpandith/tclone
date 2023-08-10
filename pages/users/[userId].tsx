import useUser from "@/Hooks/useUser";
import { Header } from "@/components/Header";
import SEO from "@/components/SEO";
import UserBio from "@/components/Users/UserBio";
import { UserHero } from "@/components/Users/UserHero";
import PostFeed from "@/components/posts/PostFeed";
import { useRouter } from "next/router";
import React from "react";
import { ClipLoader } from "react-spinners";

const UserView = (_props: any) => {
  const router = useRouter();
  const { userId } = router.query;
  const { data: fetchedUser, isLoading } = useUser(userId as string);
  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightBlue" size={80} />
      </div>
    );
  }
  return (
    <>
      <SEO
        title={fetchedUser?.name}
        description={fetchedUser?.username}
        image={fetchedUser?.image}
      />
      <main>
        <Header label={fetchedUser?.username} showBackArrow />
        <UserHero userId={userId as string} />
        <UserBio userId={userId as string} />
        <PostFeed userId={userId as string} />
      </main>
    </>
  );
};

export default UserView;
