import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import updateTitle from "../../components/PrivateRoute/Utilities/UpDateTitle";

const Register = () => {
  updateTitle("Register");
  const { googleSing, gitHubSign, createUser } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from || "/";
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setErrorMsg("");
    createUser(data.email, data.password)
      .then((user) => {
        reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  // social login method
  const handleGoogleSigin = () => {
    googleSing()
      .then((result) => {
        if (result?.user?.email) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => setErrorMsg(err.message));
  };
  const handleGithubSignin = () => {
    gitHubSign()
      .then((result) => {
        if (result?.user?.email) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => setErrorMsg(err.message));
  };
  return (
    <div className="w-full px-4 md:px-auto">
      <form
        className="border md:min-w-[28rem] mx-auto mt-4 md:max-w-[32rem] p-5 w-full md:py-10 md:px-20 bg-slate-300 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl font-semibold text-slate-700">
          Please Register !!
        </h1>
        <div className="w-full">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            required
            {...register("name", { required: true })}
            placeholder="Enter your name"
            className="py-2 px-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
        </div>

        <div className="w-full">
          <label className="label" htmlFor="confirmPassword">
            Photo URl:
          </label>
          <input
            type="text"
            {...register("image")}
            placeholder="Enter photo URL"
            className="py-2 px-2 w-full rounded-md border border-slate-300 focus:outline-none focus:border-slate-400 max-w-sm"
          />
        </div>

        <div className="w-full">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            required
            {...register("email", { required: true })}
            placeholder="Enter your email"
            className="py-2 px-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
        </div>

        <div className="w-full">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            required
            {...register("password", { required: true })}
            placeholder="Enter your password"
            className="py-2 px-2 w-full rounded-md border border-slate-300 focus:outline-none focus:border-slate-400 max-w-sm"
          />
          <label className="label">
            {errorMsg && <span className="text-red-500">{errorMsg}</span>}
          </label>
        </div>

        <p className="text-sm">
          Already have an account?
          <Link
            state={{ from: from }}
            className="text-blue-600 ml-1"
            to="/login"
          >
            Login
          </Link>
        </p>

        <input
          className="w-full mt-4 py-2 max-w-md  bg-blue-600 rounded-md text-white text-xl hover:bg-blue-700"
          type="submit"
          value="Register"
        />
      </form>

      <div className="divider max-w-[32rem] w-full mx-auto">or</div>
      <p className="my-1 text-center">Sign in with </p>

      <div className="my-4 max-w-[32rem] w-full mx-auto flex items-center justify-center gap-1">
        <button
          onClick={handleGoogleSigin}
          className="flex items-center p-1 rounded-md bg-[#685d79] hover:bg-[#544b61] duration-200 text-xl text-white justify-center border border-slate-300"
        >
          <FaGoogle className="w-10 h-10 p-1" />{" "}
          <span className="px-2">Google</span>
        </button>
        <button
          onClick={handleGithubSignin}
          className="flex items-center p-1 rounded-md bg-[#685d79] hover:bg-[#544b61] duration-200 text-xl text-white justify-center border border-slate-300"
        >
          <FaGithub className="w-10 h-10 p-1" />{" "}
          <span className="px-2">GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
