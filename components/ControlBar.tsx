import { Track } from 'livekit-client';
import * as React from 'react';
import { useRef } from 'react';
import { MediaDeviceMenu,DisconnectButton,TrackToggle,StartAudio,ChatToggle} from '@livekit/components-react';;
import { ChatIcon, LeaveIcon,ShareIcon } from '../livekit-react-offical/assets/icons';
import { useLocalParticipantPermissions } from '@livekit/components-react';
import { useMediaQuery } from '../livekit-react-offical/hooks/internal';
import { useMaybeLayoutContext } from '@livekit/components-react';
import { supportsScreenSharing } from '@livekit/components-core';
import { mergeProps } from '../livekit-react-offical/mergeProps';

/** @public */
export type ControlBarControls = {
  microphone?: boolean;
  camera?: boolean;
  chat?: boolean;
  screenShare?: boolean;
  shareURL?:boolean;
  leave?: boolean;
};

/** @public */
export interface ControlBarProps extends React.HTMLAttributes<HTMLDivElement> {
  variation?: 'minimal' | 'verbose' | 'textOnly';
  controls?: ControlBarControls;
}

/**
 * The `ControlBar` prefab gives the user the basic user interface to control their
 * media devices (camera, microphone and screen share), open the `Chat` and leave the room.
 *
 * @remarks
 * This component is build with other LiveKit components like `TrackToggle`,
 * `DeviceSelectorButton`, `DisconnectButton` and `StartAudio`.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <ControlBar />
 * </LiveKitRoom>
 * ```
 * @public
 */
export function ControlBar({ variation, controls, ...props }: ControlBarProps) {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const layoutContext = useMaybeLayoutContext();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [meetingUrl, setMeetingUrl] = React.useState("");
  React.useEffect(() => {
    setMeetingUrl(window.location.href)
    if (layoutContext?.widget.state?.showChat !== undefined) {
      setIsChatOpen(layoutContext?.widget.state?.showChat);
    }
  }, [layoutContext?.widget.state?.showChat]);
  const isTooLittleSpace = useMediaQuery(`(max-width: ${isChatOpen ? 1000 : 760}px)`);

  const defaultVariation = isTooLittleSpace ? 'minimal' : 'verbose';
  variation ??= defaultVariation;

  const visibleControls = { leave: true, ...controls };

  const localPermissions = useLocalParticipantPermissions();

  if (!localPermissions) {
    visibleControls.camera = false;
    visibleControls.chat = false;
    visibleControls.microphone = false;
    visibleControls.screenShare = false;
  } else {
    visibleControls.camera ??= localPermissions.canPublish;
    visibleControls.microphone ??= localPermissions.canPublish;
    visibleControls.screenShare ??= localPermissions.canPublish;
    visibleControls.chat ??= localPermissions.canPublishData && controls?.chat;
  }

  const showIcon = React.useMemo(
    () => variation === 'minimal' || variation === 'verbose',
    [variation],
  );
  const showText = React.useMemo(
    () => variation === 'textOnly' || variation === 'verbose',
    [variation],
  );

  const browserSupportsScreenSharing = supportsScreenSharing();

  const [isScreenShareEnabled, setIsScreenShareEnabled] = React.useState(false);

  const onScreenShareChange = (enabled: boolean) => {
    setIsScreenShareEnabled(enabled);
  };

  const htmlProps = mergeProps({ className: 'lk-control-bar' }, props);

  return (
    <div {...htmlProps}>
      {visibleControls.microphone && (
        <div className="lk-button-group">
          <TrackToggle source={Track.Source.Microphone} showIcon={showIcon}>
            {showText && 'Microphone'}
          </TrackToggle>
          <div className="lk-button-group-menu">
            <MediaDeviceMenu kind="audioinput" />
          </div>
        </div>
      )}
      {visibleControls.camera && (
        <div className="lk-button-group">
          <TrackToggle source={Track.Source.Camera} showIcon={showIcon}>
            {showText && 'Camera'}
          </TrackToggle>
          <div className="lk-button-group-menu">
            <MediaDeviceMenu kind="videoinput" />
          </div>
        </div>
      )}
      {visibleControls.screenShare && browserSupportsScreenSharing && (
        <TrackToggle
          source={Track.Source.ScreenShare}
          captureOptions={{ audio: true, selfBrowserSurface: 'include' }}
          showIcon={showIcon}
          onChange={onScreenShareChange}
        >
          {showText && (isScreenShareEnabled ? 'Stop screen share' : 'Share screen')}
        </TrackToggle>
      )}
      {visibleControls.chat && (
        <ChatToggle>
          {showIcon && <ChatIcon />}
          {showText && 'Chat'}
        </ChatToggle>
      )}
      {/*share meeting url to others */}
     {visibleControls.shareURL &&  <button className="lk-button" onClick={()=>{
        dialogRef.current?.showModal()
     }}>
        {showIcon && <ShareIcon />}
        {showText && 'Share'}
     </button>
     }
      {visibleControls.leave && (
        <DisconnectButton>
          {showIcon && <LeaveIcon />}
          {showText && 'Leave'}
        </DisconnectButton>
      )}
      <StartAudio label="Start Audio" />
      <dialog id="my_modal_3" className="modal" ref={dialogRef}>
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">To invite other people </h3>
            <p className="py-4">{meetingUrl}</p>
        </div>
      </dialog>
    </div>
  );
}
