import type { ChatMessage, MessageEncoder, MessageDecoder } from '@livekit/components-core';
import * as React from 'react';
import { useMaybeLayoutContext } from '@livekit/components-react';
import type { MessageFormatter } from '@livekit/components-react';
import { ChatEntry } from './ChatEntry';
import { useChat } from '@livekit/components-react';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { setupChat, ReceivedChatMessage,wasClickOutside } from '@livekit/components-core';

export function cloneSingleChild(
    children: React.ReactNode | React.ReactNode[],
    props?: Record<string, any>,
    key?: any,
  ) {
    return React.Children.map(children, (child) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (React.isValidElement(child) && React.Children.only(children)) {
        return React.cloneElement(child, { ...props, key });
      }
      return child;
    });
  }

/** @public */
export interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
  messageFormatter?: MessageFormatter;
  messageEncoder?: MessageEncoder;
  messageDecoder?: MessageDecoder;
}

/**
 * The Chat component adds a basis chat functionality to the LiveKit room. The messages are distributed to all participants
 * in the room. Only users who are in the room at the time of dispatch will receive the message.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <Chat />
 * </LiveKitRoom>
 * ```
 * @public
 */
export function Chat({ messageFormatter, messageDecoder, messageEncoder, ...props }: ChatProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const ulRef = React.useRef<HTMLUListElement>(null);
  const emojiRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const chatOptions = React.useMemo(() => {
    return { messageDecoder, messageEncoder };
  }, [messageDecoder, messageEncoder]);

  const { send, chatMessages, isSending } = useChat(chatOptions);

  const layoutContext = useMaybeLayoutContext();
  const lastReadMsgAt = React.useRef<ChatMessage['timestamp']>(0);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (inputRef.current && inputRef.current.value.trim() !== '') {
      if (send) {
        await send(inputRef.current.value);
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    }
  }

  React.useEffect(() => {
    if (ulRef) {
      ulRef.current?.scrollTo({ top: ulRef.current.scrollHeight });
    }
  }, [ulRef, chatMessages]);

  const handleEmojiSelect = (emoji: any) => {
    if (inputRef.current) {
        const inp = inputRef.current
        inp.value += emoji.native;
        
        setIsOpen(false)

        inp.focus();
    }
 }

    const handleEmojiClick = (e: React.MouseEvent) => {
        setIsOpen(!isOpen)
        
    }

    const handleAltEnter = async (e: React.KeyboardEvent) => {
        if (inputRef.current) {
            const inp = inputRef.current
            if (e.altKey && e.code == "Enter") {
                e.preventDefault();
                // 按下ALT+ENTER键，插入换行符
                inp.value += "\r\n";;
                inp.scrollTop = inp.scrollHeight;
                debugger
            } 
            else if (e.code == "Enter") {
                
                e.preventDefault();
                if (inputRef.current && inputRef.current.value.trim() !== '') {
                    if (send) {
                        await send(inputRef.current.value);
                        inputRef.current.value = '';
                        inputRef.current.focus();
                    }
                }

            }
        }
    }

    const handleClickOutside = React.useCallback(
        (event: MouseEvent) => {
          if (!emojiRef.current) {
            return;
          }
          if (event.target === emojiRef.current) {
            return;
          }
          if (wasClickOutside(emojiRef.current, event)) {
            setIsOpen(false)
          }
        },
        [emojiRef],
      );
    
      React.useEffect(() => {
        document.addEventListener<'click'>('click', handleClickOutside);
        return () => {
          document.removeEventListener<'click'>('click', handleClickOutside);
        };
      }, [handleClickOutside]);

  React.useEffect(() => {
    if (!layoutContext || chatMessages.length === 0) {
      return;
    }

    if (
      layoutContext.widget.state?.showChat &&
      chatMessages.length > 0 &&
      lastReadMsgAt.current !== chatMessages[chatMessages.length - 1]?.timestamp
    ) {
      lastReadMsgAt.current = chatMessages[chatMessages.length - 1]?.timestamp;
      return;
    }

    const unreadMessageCount = chatMessages.filter(
      (msg) => !lastReadMsgAt.current || msg.timestamp > lastReadMsgAt.current,
    ).length;

    const { widget } = layoutContext;
    if (unreadMessageCount > 0 && widget.state?.unreadMessages !== unreadMessageCount) {
      widget.dispatch?.({ msg: 'unread_msg', count: unreadMessageCount });
    }
  }, [chatMessages, layoutContext?.widget]);

  return (
    <div {...props} className="lk-chat">
      <ul className="overflow-y-hidden overflow-x-hidden h-full" ref={ulRef}>
        {props.children
          ? chatMessages.map((msg, idx) =>
              cloneSingleChild(props.children, {
                entry: msg,
                key: idx,
                messageFormatter,
              }),
            )
          : chatMessages.map((msg, idx, allMsg) => {
              const hideName = idx >= 1 && allMsg[idx - 1].from === msg.from;
              // If the time delta between two messages is bigger than 60s show timestamp.
              const hideTimestamp = idx >= 1 && msg.timestamp - allMsg[idx - 1].timestamp < 60_000;

              return (
                <ChatEntry
                  key={idx}
                //   hideName={hideName}
                  hideTimestamp={hideName === false ? false : hideTimestamp} // If we show the name always show the timestamp as well.
                  entry={msg}
                  messageFormatter={messageFormatter}
                />
              );
            })}
      </ul>
      <form className="lk-chat-form" onSubmit={handleSubmit}>
        <input
          className="lk-form-control lk-chat-form-input"
          disabled={isSending}
          ref={inputRef}
          type="text"
          placeholder="Enter a message..."
          onKeyUp={e => {
            if(e.key === 'Enter')
               e.preventDefault()
               handleAltEnter(e)
            }}
        />
        {/* <button type="submit" className="lk-button lk-chat-form-button" disabled={isSending}>
          Send
        </button> */}
        <div className='ml-1 col-span-2 text-end flex justify-around items-center'>
            {/* 发送图片被限制64kb，需要自定义发送接收消息接口，以后再说
            <div className=' bg-transparent rounded-[999px] hover:cursor-pointer hover:bg-white hover:bg-opacity-10  w-[36px] h-[36px] flex justify-center items-center'>
                <input  type="file" id="fileSelect" name="file"/>
                <svg  onClick={handleAdd} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2628" width="28" height="28"><path d="M928 896H96c-53.02 0-96-42.98-96-96V224c0-53.02 42.98-96 96-96h832c53.02 0 96 42.98 96 96v576c0 53.02-42.98 96-96 96zM224 240c-61.856 0-112 50.144-112 112s50.144 112 112 112 112-50.144 112-112-50.144-112-112-112zM128 768h768V544l-175.03-175.03c-9.372-9.372-24.568-9.372-33.942 0L416 640l-111.03-111.03c-9.372-9.372-24.568-9.372-33.942 0L128 672v96z" p-id="2629" fill="#ffffff"></path></svg>
            </div> */}
            <div ref={emojiRef} id="emojiSVG" className=' z-[999] relative bg-transparent rounded-[999px] hover:cursor-pointer hover:bg-white hover:bg-opacity-10  w-[36px] h-[36px] flex justify-center items-center'>
                <svg className="icon" onClick={handleEmojiClick}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5020" width="36" height="36"><path d="M512 832c-176.448 0-320-143.552-320-320S335.552 192 512 192s320 143.552 320 320-143.552 320-320 320m0-704C300.256 128 128 300.256 128 512s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128" fill="white" p-id="5021"></path><path d="M700.64 580.288a32 32 0 0 0-43.712 11.68A160.608 160.608 0 0 1 518.304 672a160.576 160.576 0 0 1-138.592-80 32 32 0 0 0-55.424 32.032 224.896 224.896 0 0 0 194.016 112 224.768 224.768 0 0 0 194.016-112 32 32 0 0 0-11.68-43.744M384 512a32 32 0 0 0 32-32v-96a32 32 0 0 0-64 0v96a32 32 0 0 0 32 32M640 512a32 32 0 0 0 32-32v-96a32 32 0 0 0-64 0v96a32 32 0 0 0 32 32" fill="white" p-id="5022"></path></svg>
                <div id="emojiPicker" className="absolute right-[50%] bottom-full top-auto"
                style={{ visibility: isOpen ? 'visible' : 'hidden' }}
                >

                    <Picker data={data} onEmojiSelect={handleEmojiSelect}/>
                </div>
            </div>
            <div className=' bg-transparent rounded-[999px] hover:cursor-pointer hover:bg-white hover:bg-opacity-10  w-[36px] h-[36px] flex justify-center items-center'>
                <svg onClick={handleSubmit} className="icon  " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2840" width="24" height="24"><path fill='white' d="M0 1024l106.496-474.112 588.8-36.864-588.8-39.936-106.496-473.088 1024 512z" p-id="2841"></path></svg>
            </div>

        </div>
      </form>
    </div>
  );
}