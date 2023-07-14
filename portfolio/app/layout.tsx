import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "./context/GlobalProvider";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import StyledComponentsRegistry from "./registry";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });
import { ChatGPTProvider } from "./context/ChatGPTContext";
export const metadata = {
  title: "Yunze Zhao",
  description: "Yunze Zhao's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="color-scheme" content="light" />
      <GlobalContextProvider>
        <ChatGPTProvider>
          <body
            className={`${inter.className}`}
            style={{ margin: "0 !important" }}
          >
            <StyledComponentsRegistry>
              <>
                <Navbar />
                <div className="childrenWrapper">{children}</div>
                <Footer />
              </>
            </StyledComponentsRegistry>
          </body>
        </ChatGPTProvider>
      </GlobalContextProvider>
      <Analytics />
    </html>
  );
}
