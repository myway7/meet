import React, { ReactElement, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import initialState from "../redux/slices"
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { logInUser} from "../redux/slices";
import type { NextPage } from 'next';
import { account,ID} from '../lib/appwrite';
import { MyErrorToast,MyInfoToast } from '../components/Toast';

const RegisterPage:NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>("");

  const onSubmit =  () => {
    console.log("注册");
    console.log(email)
  if(email == "" || password == "" || rePassword == ""){
    setShowError(true)
    setErrorMsg("Input can not be empty")
    setTimeout(() => {
      setShowError(false)
  }, 2000);
  return;
  }else if(password != rePassword){
    setShowError(true)
    setErrorMsg("The passwords entered twice are different")
    setTimeout(() => {
      setShowError(false)
  }, 2000);
  return;
  }
  account.create(ID.unique(), email, password).then(res=>{
    setShowSuccess(true);
    setSuccessMsg("register success");
    setTimeout(() => {
      setShowError(false)
  }, 2000);

    router.push("/login");
  }).catch(err=>{
    setShowError(true)
    setErrorMsg(err.message)
    setTimeout(() => {
      setShowError(false)
  }, 2000);
  })
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
              <input type="email" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your password</span>
              </label>
              <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Repeat your password</span>
              </label>
              <input type="password" placeholder="••••••••" value={rePassword} onChange={(e) => setRePassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="card-actions">
              <button className="btn btn-outline btn-wide" onClick={onSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </main>
      {
        showError && <MyErrorToast>
            {errorMsg}
        </MyErrorToast>
        }
        {
        showSuccess && <MyInfoToast>
            {successMsg}
        </MyInfoToast>
        }
    </>
  );
};

export default RegisterPage;
