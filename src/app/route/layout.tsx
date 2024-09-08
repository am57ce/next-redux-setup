import React from "react";
import StoreProvider from "../StoreProvider";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <div className="flex flex-col gap-5 items-center justify-center w-full">
        {children}
      </div>
    </StoreProvider>
  );
}
