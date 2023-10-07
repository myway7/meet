import * as React from 'react';

/** @public */
export interface ShareToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ShareToggle(props: ShareToggleProps) {

  return <button className="lk-button" onClick={()=>{console.log("1111")}}>{props.children}</button>;
}
