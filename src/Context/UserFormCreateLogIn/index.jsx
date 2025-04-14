import { createContext, useState } from "react";


export const UserFormCreateLogIn = createContext();

export function UserFormCreateProvider ({ children }) {


  const [createACont, setcreateACont] = useState()

  console.log(createACont)

  return (
    <UserFormCreateLogIn.Provider value={{ createACont, setcreateACont }}>
      {children}
    </UserFormCreateLogIn.Provider>
  );
}
