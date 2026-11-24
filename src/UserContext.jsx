import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data.users);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <UserContext.Provider value={{ users: user }}>
      {children}
    </UserContext.Provider>
  );
};
