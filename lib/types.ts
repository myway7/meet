import { LocalAudioTrack, LocalVideoTrack } from 'livekit-client';

export interface SessionProps {
  roomName: string;
  identity: string;
  audioTrack?: LocalAudioTrack;
  videoTrack?: LocalVideoTrack;
  region?: string;
  turnServer?: RTCIceServer;
  forceRelay?: boolean;
}

export interface TokenResult {
  identity: string;
  accessToken: string;
}

export interface RoomMetadata  {
  passwd: string,
  time: number,
  maxParticipants: number,
  videoShareUrl?: string
}