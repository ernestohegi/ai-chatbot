import Footer from "./components/Footer";
import Header from "./components/Header";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="flex justify-center p-8 h-screen overflow-hidden">
      <div className="flex flex-col gap-8 max-w-3xl items-center h-full">
        <Header />
        <Chat />
        <Footer />
      </div>
    </main>
  );
}
