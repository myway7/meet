import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { encodePassphrase, generateRoomId, randomString } from '../lib/client-utils';
import Layout from "../components/layout"
import { useDispatch, useSelector } from "react-redux";

function DemoMeetingTab({ label }: { label: string }) {
  const router = useRouter();
  const startMeeting = () => {
    router.push(`/meeting/?roomName=${generateRoomId()}`);
  };
  return (
    <div className={styles.tabContent}>
      {/* <p style={{ margin: 0 }}>Try LiveKit Meet for free with our live demo project.</p> */}
      <button className='btn' onClick={startMeeting}>
        Start Meeting
      </button>
    </div>
  );
}


const Home = () => {
  const router = useRouter();
  const {isLoggedIn,user} = useSelector((state:any)=>state.userState);
  useEffect(()=>{
    console.log(isLoggedIn)
    console.log(user)
    if(isLoggedIn){
      router.push("/")
    }else{
      router.push("/login")
    }
  },[isLoggedIn,user])
 
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
