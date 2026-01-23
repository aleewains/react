import React, { createContext } from "react";

type User = {
  username: string;
  password: string;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

//1- create context using react createContext
const UserContext = createContext<UserContextType | null>(null);
export default UserContext;
