"use client";

import { ReactNode, SetStateAction, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface LoadingContextTypes {
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextTypes>({
  loading: false,
  setLoading: () => {},
});

const LoadingContextProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
