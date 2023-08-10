import React, { useCallback, useState } from "react";
import Input from "../Input";
import { Modal } from "../Modal";
import useRegisterModal from "../../Hooks/UseRegisterModal";
import useLoginModal from "../../Hooks/UseLoginModel";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
export const RegisterModel = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const ontoggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal, isLoading]);
  const onSubmit = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        password,
        username,
        name,
      });
      toast.success("Account Created");
      registerModal.onClose();
      signIn("credentials", {
        email,
        password,
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Something went wrong");
    }
  }, [registerModal, email, username, password, name]);
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        disabled={isLoading}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Alreay Have Account?
        <span
          onClick={ontoggle}
          className="
              text-white
              cursor-pointer
              hover:underline
            "
        >
          {" "}
          Log in
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
