import React, { useState, createContext } from "react";

const UserContext = createContext({
  username: "",
  role: "",
  email: "",
  name: ""
});

export const UserContextProvider = (props) => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        role,
        setRole,
        email,
        setEmail,
        name,
        setName
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};


export default UserContext;
