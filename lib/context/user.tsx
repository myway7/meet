import { createContext, useContext, useEffect, useState } from "react";
import { account,ID } from "../appwrite";

interface User {
  id: string;
  email: string;
}

interface UserContextProps {
  current: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
}

const UserContext = createContext<UserContextProps|undefined>(undefined);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props: React.PropsWithChildren) {
  const [user, setUser] = useState<any | null>(null);

  async function login(email: string, password: string) {
    const loggedIn = await account.createEmailSession(email, password);
    setUser(loggedIn);
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function register(email: string, password: string) {
    await account.create(ID.unique(),email, password);
    await login(email, password);
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout, register }}>
      {props.children}
    </UserContext.Provider>
  );
}
