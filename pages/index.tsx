import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { encodePassphrase, generateRoomId, randomString } from '../lib/client-utils';
import Layout from "../components/layout"
import { useDispatch, useSelector } from "react-redux";
import { account } from '../lib/appwrite';

function DemoMeetingTab({ label }: { label: string }) {
  const router = useRouter();
  const startMeeting = () => {
    router.push(`/meeting/?roomName=${generateRoomId()}`);
  };
  return (
    // <div className={styles.tabContent}>
    //   {/* <p style={{ margin: 0 }}>Try LiveKit Meet for free with our live demo project.</p> */}
    //   <button className='btn' onClick={startMeeting}>
    //     Start Meeting
    //   </button>
    // </div>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Start collaborating right away</h1>
      <p className="py-6">Your conversations are protected from eavesdropping by third parties.Our platform is designed to deliver high-quality video and audio, even in poor network conditions.</p>
      <button className="btn btn-primary" onClick={startMeeting}>Start Meeting</button>
    </div>
  </div>
</div>
  );
}


const Home = () => {
  const router = useRouter();
  const {isLoggedIn,user} = useSelector((state:any)=>state.userState);
  // useEffect( ()=>{
  //   console.log(isLoggedIn)
  //   console.log(user)
  //   if(isLoggedIn){
  //     router.push("/")
  //   }else{
  //     router.push("/login")
  //   }
  // },[isLoggedIn])
  useEffect(()=>{
    account.get().then((res)=>{
      console.log(res)
      router.push("/")
    }).catch((err)=>{
      console.log(err);
      router.push("/login")
    })},[isLoggedIn,user])
 
  return (
    <>
    <Layout>
    {/* <main className={styles.main}> */}
        <DemoMeetingTab label="Demo" />
      {/* </main> */}
            {/* <div className="header">
          <img src="/images/livekit-meet-home.svg" alt="LiveKit Meet" width="360" height="45" />
          <h2>
            Open source video conferencing app built on{' '}
            <a href="https://github.com/livekit/components-js?ref=meet" rel="noopener">
              LiveKit&nbsp;Components
            </a>
            ,{' '}
            <a href="https://livekit.io/cloud?ref=meet" rel="noopener">
              LiveKit&nbsp;Cloud
            </a>{' '}
            and Next.js.
          </h2>
        </div> */}
        {/* <Tabs selectedIndex={tabIndex} onTabSelected={onTabSelected}>
          <DemoMeetingTab label="Demo" />
          <CustomConnectionTab label="Custom" />
        </Tabs> */}
      {/* <footer data-lk-theme="default">
        Hosted on{' '}
        <a href="https://livekit.io/cloud?ref=meet" rel="noopener">
          LiveKit Cloud
        </a>
        . Source code on{' '}
        <a href="https://github.com/livekit/meet?ref=meet" rel="noopener">
          GitHub
        </a>
        .
      </footer> */}
    </Layout>
    </>
  );
};

export default Home;
