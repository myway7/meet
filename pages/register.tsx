import React, { ReactElement, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import initialState from "../redux/slices"
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { logInUser} from "../redux/slices";
import type { NextPage } from 'next';

const RegisterPage:NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmit = () => {
    router.push("/");
  };
  return (
    <>
      <main className={styles.main}>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center space-y-6">
            <h2 className="card-title">Sign up for our platform!</h2>
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
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Repeat your password</span>
              </label>
              <input type="text" placeholder="••••••••" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="card-actions">
              <button className="btn btn-outline btn-wide" onClick={onSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
