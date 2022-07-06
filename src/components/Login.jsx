import React from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../features/firebase/config";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const hdlSubmit = async (data) => {
    // console.log(data.email);
    const { email, password } = data;
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const user = {
      email: cred.user.email,
      id: cred.user.uid,
    };
    console.log(user);
    dispatch({
      type: "setUserInfo",
      payload: user,
      //   console.log(userInfo);
    });
  };
  console.log(userInfo);
  return (
    <form
      action=""
      className="my-[50px] mx-auto w-[400px] shadow-md py-2 px-5 flex flex-col gap-2"
      onSubmit={handleSubmit(hdlSubmit)}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="border py-2 px-4"
        {...register("email")}
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="border py-2 px-4"
        {...register("password")}
      />
      <button type="submit" className="py-2 px-4 bg-blue-500 text-white">
        Sign in
      </button>
    </form>
  );
};

export default Login;
