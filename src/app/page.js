import ChatLayout from "@/components/ChatLayout";
import Menubar from "@/components/Menubar";

export default function Home() {
  return (
    <main className="flex flex-col justify-center lg:grid lg:grid-cols-2 lg:justify-between">
      <section>
        <Menubar />
      </section>
      <section>
        <ChatLayout />
      </section>
    </main>
  );
}
