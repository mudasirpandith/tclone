import type { NextPage } from "next";
import { Header } from "../components/Header";
import Form from "@/components/Form";
import PostFeed from "@/components/posts/PostFeed";

const Home: NextPage = (props) => {
  return (
    <>
      <Header label="home" />
      <Form placeholder="Whats is happening" />
      <PostFeed />
    </>
  );
};

export default Home;
