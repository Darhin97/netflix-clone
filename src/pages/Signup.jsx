import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

let call;

const SignUpPage = () => {
  const { user, signUp } = UserAuth();
  call = signUp;

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute object-cover w-full h-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/35b01c07-9009-43d3-bd56-ee16b48da1c8/GH-en-20230417-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
      <div className="bg-black/60 fixed inset-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="font-bold text-3xl">Sign Up</h1>
            <Form className="flex flex-col w-full py-4" method="post" action="">
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                name="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="bg-red-600 py-3 my-6 rounded font-bold "
              >
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600 mr-2">
                  Already Subscribed to netflix?
                </span>
                <Link to="/login">Sign In</Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

export const action = async ({ request }) => {
  // console.log(email, password);

  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const res = await call(email, password);
  } catch (err) {
    throw err;
    console.log(err);
  }
  return redirect("/");
};
