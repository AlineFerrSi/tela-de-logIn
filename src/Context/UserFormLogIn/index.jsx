import { createContext, useState } from "react";


export const UserFormLogInContext = createContext();

export function UserFormLogInProvider({ children }) {

  const [forLogIn, setforLogIn] = useState();



  return (
    <UserFormLogInContext.Provider value={{ forLogIn, setforLogIn }}>
      {children}
    </UserFormLogInContext.Provider>
  );
}
