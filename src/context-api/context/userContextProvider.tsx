import React, { useState, useContext } from "react";
import UserContext from "./userContext";
type Props = {
  children: React.ReactNode;
};
type User = {
  username: string;
  password: string;
};

//this below code is used to simplyfy imports and use of context
export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
  // below direct return
  // return useContext(userContext)
};

//2- create a function to make a provider for context
// { children } is destructured here - actual props => props.children
const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    //use the varicle used in creating context and create a wrapper or provider by adding .provider
    // in this case UserContext is the varible
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
