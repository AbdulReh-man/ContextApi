import { createContext, useContext, useState } from "react";

export const ContextUser = createContext();

export function Context() {
  return useContext(ContextUser);
}
function Provider({ children }) {
  const [user, setUser] = useState();
  return (
    <ContextUser.Provider value={{ user, setUser }}>
      {children}
    </ContextUser.Provider>
  );
}

export default Provider;
