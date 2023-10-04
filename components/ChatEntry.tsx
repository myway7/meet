import { tokenize, ReceivedChatMessage ,createDefaultGrammar} from '@livekit/components-core';
import * as React from 'react';

export type MessageFormatter = (message: string) => React.ReactNode;

/**
 * ChatEntry composes the HTML div element under the hood, so you can pass all its props.
 * These are the props specific to the ChatEntry component:
 */
export interface ChatEntryProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * The chat massage object to display.
   */
  entry: ReceivedChatMessage;
    /** Hide message timestamp. */
    hideTimestamp?: boolean;
  /**
   * An optional formatter for the message body.
   */
  messageFormatter?: MessageFormatter;
}

/**
 * The ChatEntry component holds and displays one chat message.
 *
 * @example
 * ```tsx
 * {...}
 *   <Chat>
 *     <ChatEntry />
 *   </Chat>
 * {...}
 * ```
 */
export function ChatEntry({ entry,  hideTimestamp = false, messageFormatter, ...props }: ChatEntryProps) {
  const formattedMessage = React.useMemo(() => {
    return messageFormatter ? messageFormatter(entry.message) : entry.message;
  }, [entry.message, messageFormatter]);

  const time = new Date(entry.timestamp);
  const locale = navigator ? navigator.language : 'en-US';

  if(entry.from?.isLocal){
    return (
        <li
        className="lk-chat-entry text-end  animate__animated  animate__slideInRight"
        title={new Date(entry.timestamp).toLocaleTimeString()}
        data-lk-message-origin='local'
        {...props}
      >
        {(!hideTimestamp) && (
        <span className="lk-meta-data">
          {!hideTimestamp && (
            <span className="lk-timestamp">
              {time.toLocaleTimeString(locale, { timeStyle: 'short' })}
            </span>
          )}
        </span>
      )}
        <div className='chat chat-end '>
            <div className="chat-header">
                {entry.from?.identity}
                {/* <time className="text-xs opacity-50">12:46</time> */}
            </div>
                <span className="chat-bubble  chat-bubble-info" style={{whiteSpace:"pre-wrap"}}>{formattedMessage}</span>
        </div>
      </li>
    )
  }
  return (
    <li
    className="lk-chat-entry  animate__animated  animate__slideInLeft"
    title={new Date(entry.timestamp).toLocaleTimeString()}
    data-lk-message-origin='remote'
    {...props}
  >
    <div className="chat chat-start">
      <div className="chat-header">
        {entry.from?.identity}
        {/* <time className="text-xs opacity-50">12:46</time> */}
    </div>
        <div className="chat-bubble">{formattedMessage}</div>
    </div>
  </li>
);
}

export function formatChatMessageLinks(message: string): React.ReactNode {
  return tokenize(message, createDefaultGrammar()).map((tok, i) => {
    if (typeof tok === `string`) {
      return tok;
    } else {
      const content = tok.content.toString();
      const href =
        tok.type === `url`
          ? /^http(s?):\/\//.test(content)
            ? content
            : `https://${content}`
          : `mailto:${content}`;
      return (
        <a className="lk-chat-link" key={i} href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      );
    }
  });
}