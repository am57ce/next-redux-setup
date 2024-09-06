import React from 'react';
import StoreProvider from '../StoreProvider';

export default function Home({ children }: {
    children: React.ReactNode
  }) {
    return (
        <StoreProvider>
    <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Story Canvas</h1>
        <p className="text-lg">Be Ready for <span className="underline decoration-wavy decoration-green-500">your own Story</span></p>
        {children}
        </div>
      </div>
      </StoreProvider>
    );
};