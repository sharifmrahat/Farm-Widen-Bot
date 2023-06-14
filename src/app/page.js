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
        className={`flex flex-col justify-center lg:grid lg:grid-cols-2 lg:justify-between bg-[#f1e1dd] ${montserrat.className}`}
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
