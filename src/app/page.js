/* eslint-disable @next/next/no-page-custom-font */
import ChatLayout from "@/components/ChatLayout";
import Menubar from "@/components/Menubar";
import "./globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`lg:grid lg:grid-cols-2 lg:items-center ${montserrat.className} h-screen bg-[#f1e1dd] px-4`}
      >
        <section>
          <Menubar />
        </section>
        <section>
          <ChatLayout />
        </section>
      </main>
    </>
  );
}
