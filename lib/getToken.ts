import { AccessToken } from 'livekit-server-sdk';
import type { AccessTokenOptions, VideoGrant } from 'livekit-server-sdk';
import { TokenResult} from './types';


export const createToken = (userInfo: AccessTokenOptions, grant: VideoGrant) => {
  const at = new AccessToken(process.env.NEXT_PUBLIC_LIVEKIT_API_KEY, process.env.NEXT_PUBLIC_LIVEKIT_API_SECRET, userInfo);
  at.ttl = '5m';
  at.addGrant(grant);
  return at.toJwt();
};
// TODO最后一个人离开房间时重置密码
export  function getToken(req: { identity: any; name: any;roomName: any; metadata?: any; }) {

    const { roomName, identity, name, metadata } = req;
    // console.log({ roomName, identity, name, metadata } )

    const grant: VideoGrant = {
      room: roomName,
      roomJoin: true,
      canPublish: true,
      canPublishData: true,
      canSubscribe: true,
      roomAdmin: false
    }
    const token = createToken({ identity, name,}, grant);
    const result: TokenResult = {
      identity,
      accessToken: token,
    };

    return result;
}