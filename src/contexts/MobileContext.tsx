import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

// Create the context
const MobileContext = createContext(false);

interface MobileProviderProps {
  children: ReactNode; // Define the type for children
}

// Create a provider component
export const MobileProvider: React.FC<MobileProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 769);
    }

    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};

// Create a custom hook to use the MobileContext
export const useMobile = () => useContext(MobileContext);
