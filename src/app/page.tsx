import DeepSeekChat from "./components/DeepSeekChat";

export default function Home() {
  return (
    <main className="flex justify-center p-8 h-screen overflow-hidden">
      <div className="flex flex-col gap-8 max-w-3xl items-center h-full">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-5xl font-extrabold text-cente">
            Your Friendly AI Assistant
          </h1>
          <p className="text-xl">
            This app uses DeepSeek's AI to provide concise and helpful answers.
          </p>
        </div>
        <DeepSeekChat />
      </div>
    </main>
  );
}
