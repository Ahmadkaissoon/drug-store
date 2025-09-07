import { createContext, useContext, useState } from "react";
import secureLocalStorage from "react-secure-storage";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize from localStorage if available
    const storedUser = secureLocalStorage.getItem("USER");
    return storedUser && typeof storedUser === "object" && "data" in storedUser
      ? storedUser.data
      : null;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
