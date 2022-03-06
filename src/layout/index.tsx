import type { ReactNode, VFC } from "react";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] mx-auto max-w-screen-md min-h-screen">
      <Header />
      <main className="p-4">
        <LayoutErrorBoundary>{props.children}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
