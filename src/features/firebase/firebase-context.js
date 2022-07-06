import { createContext, useContext } from "react";

const FireContext = createContext(undefined);
function FireProvider({ value, ...props }) {
  return <FireContext.Provider value={value} {...props}></FireContext.Provider>;
}
function useFireContext() {
  const context = useContext(FireContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within CountProvider");
  return context;
}
export { FireProvider, useFireContext };
