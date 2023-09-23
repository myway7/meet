import React from "react";
import styles from '../../styles/Home.module.css';
import { useRouter } from "next/router";
export interface LayoutProps {
    children?: React.ReactNode;
  }
const Layout = ({ children}:LayoutProps) => {
    const router = useRouter();
    const onHome=()=>{
        router.push("/")
    }
    return (
      <>
        <div className="navbar bg-base-100 absolute">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" onClick={onHome}>Meeting</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="avater.jpeg" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-32">
                    <li>
                    <a className="justify-between">
                        Profile
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
        <div className={styles.main}>{children}</div>
        {/* <footer className="footer footer-center p-4  text-base-content">
        <aside>
            <p>Copyright © 2023 - All right reserved by ***</p>
        </aside>
        </footer> */}
      </>
    );
  };
export default Layout;