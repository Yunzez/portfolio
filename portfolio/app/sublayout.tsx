// Sublayout.tsx
"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
interface SublayoutProps {
  children: React.ReactNode;
}

const Sublayout: React.FC<SublayoutProps> = ({ children }) => {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  });
  return (
    <div className="sublayout">
      {pathname.includes("/archive") && <Navbar />}
      {pathname.includes("/archive") && (
        <div className="childrenWrapper">{children}</div>
      )}
      {children}
      {pathname.includes("/archive") && <Footer />}
    </div>
  );
};

export default Sublayout;
