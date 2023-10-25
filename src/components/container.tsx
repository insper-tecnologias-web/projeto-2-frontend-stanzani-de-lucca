import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-row justify-center">
      <div className="w-full max-w-3xl px-4 md:px-6 border border-green-500">{children}</div>
    </main>
  );
};

export default Container;
