import { useRef } from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const mainRef = useRef();

  return (
    <>
      <Header mainRef={mainRef} />
      <main ref={mainRef}>{children}</main>
      <Footer />
    </>
  );
}
