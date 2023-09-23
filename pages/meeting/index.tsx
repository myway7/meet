'use client';
import {
  LiveKitRoom,
  PreJoin,
  LocalUserChoices,
  useToken,
  VideoConference,
  formatChatMessageLinks,
} from '@livekit/components-react';
import {
  ExternalE2EEKeyProvider,
  LogLevel,
  Room,
  RoomConnectOptions,
  RoomOptions,
  VideoPresets,
} from 'livekit-client';

import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {useCallback, useEffect, useMemo, useState } from 'react';
import { DebugMode } from '../../lib/Debug';
import {
  decodePassphrase,
  encodePassphrase,
  randomString,
  useServerUrl,
} from '../../lib/client-utils';
import dynamic from 'next/dynamic';
import { AccessToken } from 'livekit-server-sdk';
import type { AccessTokenOptions, VideoGrant } from 'livekit-server-sdk';
import { TokenResult } from '../../lib/types';
import { getToken } from '../../lib/getToken';
import Layout from '../../components/layout';

const PreJoinNoSSR = dynamic(
  async () => {
    return (await import('@livekit/components-react')).PreJoin;
  },
  { ssr: false },
);

const Home: NextPage = () => {
  const router = useRouter();
  const {roomName } = router.query;
  const e2eePassphrase =
    typeof window !== 'undefined' && decodePassphrase(location.hash.substring(1));

  const [preJoinChoices, setPreJoinChoices] = useState<LocalUserChoices | undefined>(undefined);

  function handlePreJoinSubmit(values: LocalUserChoices) {
    if (values.e2ee) {
      location.hash = encodePassphrase(values.sharedPassphrase);
    }
    setPreJoinChoices(values);
  }
  return (
    <>
      {/* <Head>
        <title>LiveKit Meet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Layout>
 
      <main data-lk-theme="default">
      {roomName && !Array.isArray(roomName) && preJoinChoices ? (
          <ActiveRoom
            roomName={roomName}
            userChoices={preJoinChoices}
            onLeave={() => {
              router.push('/');
            }}
          ></ActiveRoom>
        ) : (
          <div style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
            <PreJoinNoSSR
              onError={(err) => console.log('error while setting up prejoin', err)}
              defaults={{
                username: '',
                videoEnabled: true,
                audioEnabled: true,
                // e2ee: !!e2eePassphrase,
                // sharedPassphrase: e2eePassphrase || randomString(64),
                e2ee: true,
                sharedPassphrase: e2eePassphrase || randomString(64),
              }}
              onSubmit={handlePreJoinSubmit}
              showE2EEOptions={false}
            ></PreJoinNoSSR>
          </div>
        )}
      </main> 
    
      </Layout>
    </>
  );
};

export default Home;

type ActiveRoomProps = {
  userChoices: LocalUserChoices;
  roomName: string;
  region?: string;
  onLeave?: () => void;
};
const ActiveRoom = ({ roomName, userChoices, onLeave }: ActiveRoomProps) =>  {
  const [token, setToken] = useState<TokenResult | undefined>(undefined);
  const fetchToken = useCallback(
    async (roomName: string) => {
        if(roomName === undefined) return undefined
        if(!process.env.NEXT_PUBLIC_LK_TOKEN_ENDPOINT) return undefined
        const body = {
            identity: userChoices.username,
            name: userChoices.username,
            roomName: roomName
        };
      const response = getToken(body);
      const token =  response as TokenResult;
      setToken(token)
      return token;
    },
    [roomName]
);
useEffect(()=>{

  fetchToken(roomName).catch(e=>{
      console.log(e)
  })

}, [roomName])

  const router = useRouter();
  const { region, hq } = router.query;
  const liveKitUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;
  // console.log(liveKitUrl)

  const worker =
    typeof window !== 'undefined' &&
    userChoices.e2ee &&
    new Worker(new URL('livekit-client/e2ee-worker', import.meta.url));

  const e2eeEnabled = !!(userChoices.e2ee && worker);
  const keyProvider = new ExternalE2EEKeyProvider();

  const roomOptions = useMemo((): RoomOptions => {
    return {
      videoCaptureDefaults: {
        deviceId: userChoices.videoDeviceId ?? undefined,
        resolution: hq === 'true' ? VideoPresets.h2160 : VideoPresets.h720,
      },
      publishDefaults: {
        dtx: false,
        videoSimulcastLayers:
          hq === 'true'
            ? [VideoPresets.h1080, VideoPresets.h720]
            : [VideoPresets.h540, VideoPresets.h216],
        red: !e2eeEnabled,
      },
      audioCaptureDefaults: {
        deviceId: userChoices.audioDeviceId ?? undefined,
      },
      adaptiveStream: { pixelDensity: 'screen' },
      dynacast: true,
      e2ee: e2eeEnabled
        ? {
            keyProvider,
            worker,
          }
        : undefined,
    };
  }, [userChoices, hq]);

  const room = useMemo(() => new Room(roomOptions), []);

  if (e2eeEnabled) {
    keyProvider.setKey(decodePassphrase(userChoices.sharedPassphrase));
    room.setE2EEEnabled(true);
  }
  const connectOptions = useMemo((): RoomConnectOptions => {
    return {
      autoSubscribe: true,
    };
  }, []);

  return (
    <>
      {liveKitUrl && (
        <LiveKitRoom
          room={room}
          token={token?.accessToken}
          serverUrl={liveKitUrl}
          connectOptions={connectOptions}
          video={userChoices.videoEnabled}
          audio={userChoices.audioEnabled}
          onDisconnected={onLeave}
        >
          <VideoConference chatMessageFormatter={formatChatMessageLinks} />
          <DebugMode logLevel={LogLevel.info} />
        </LiveKitRoom>
      )}
    </>
  );
};
