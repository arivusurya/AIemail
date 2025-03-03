"use client";

import React, { createContext, useContext, useState } from "react";

// Define the ScreenContext interface
interface ScreenContext {
  screen: string;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with a default value of undefined
export const ScreenContext = createContext<ScreenContext | undefined>(undefined);

// Define the ScreenProvider component
export function ScreenProvider({ children }: { children: React.ReactNode }) {
  const [screen, setScreen] = useState<string>("desktop");

  return (
    <ScreenContext.Provider value={{ screen, setScreen }}>
      {children}
    </ScreenContext.Provider>
  );
}

// Define the useScreen hook
export function useScreen() {
  const context = useContext(ScreenContext);
  if (context === undefined) {
    throw new Error("useScreen must be used within a ScreenProvider");
  }
  return context;
}