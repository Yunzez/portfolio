'use client'
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <><Navbar />{children} <Footer /></>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {/* <Navbar /> */}
      {children as React.ReactChild}
      {/* <Footer /> */}
    </StyleSheetManager>
  );
}
