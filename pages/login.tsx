import React, { ReactElement, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import initialState from "../redux/slices"
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { logInUser} from "../redux/slices";
import type { NextPage } from 'next';

const LoginPage:NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmit = () => {
    const formattedData = {
      id: 11,
      name:"q",
      username:"test",
      email:"123@test.com",
      address: {
        street:"123",
        suite:"123",
        city:"123",
        zipcode:"123",
      },
      phone:"123",
      website:"123",
      company: {
        name: "123",
        catchPhrase:"123",
        bs:"123",
      },
    };
    dispatch(logInUser(formattedData));
    router.push("/");
  };
  const onRegister = ()=>{
    console.log("register")
    router.push("/register");
  }
  return (
    <>
      <main className={styles.main}>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center space-y-6">
            <h2 className="card-title">Sign in to our platform!</h2>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your email</span>
              </label>
              <input type="text" placeholder="name@company.com" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your password</span>
              </label>
              <input type="text" placeholder="••••••••" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="flex items-start w-full">
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                  </div>
                  <label  className="ml-2 text-sm font-medium  dark:text-gray-300">Remember me</label>
              </div>
             <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
            </div>
            <div className="card-actions">
              <button className="btn btn-outline btn-wide" onClick={onSubmit}>Submit</button>
            </div>
            <div className="flex items-start text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a className="text-blue-700 hover:underline dark:text-blue-500" onClick={onRegister}>Create account</a>
        </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
