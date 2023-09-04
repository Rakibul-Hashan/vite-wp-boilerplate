import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [loginError, setLoginError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (loginData) => {
    const siteUrl = "http://blanksite.com";
    axios
      .post(`${siteUrl}/wp-json/jwt-auth/v1/token`, loginData)
      .then((res) => {
        if (res.data.token === undefined)
        {
          setLoginError()
        }
         console.log(res.data);
      })
      .catch((err) => console.log(err));
    console.log(loginData);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        {/* FORM Start */}
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                {...register("username")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                {...register("password")}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
        {/* FORM end */}
      </div>
    </div>
  );
};

export default Login;
