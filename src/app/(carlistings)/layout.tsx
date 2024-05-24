import Navbar from "@/components/Navbar";
import CarsContextProvider from "@/context/CarsContextProvider";
import LoadingContextProvider from "@/context/LoadingContextProvider";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CarsListingLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main className="hide-default-scrollbar">
        <Navbar />
        <CarsContextProvider>
          <LoadingContextProvider>{children}</LoadingContextProvider>
        </CarsContextProvider>
      </main>
    </>
  );
};

export default CarsListingLayout;
