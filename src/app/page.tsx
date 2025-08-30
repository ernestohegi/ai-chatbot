import DeepSeekChat from "./components/DeepSeekChat";

export default function Home() {
  return (
    <main className="flex justify-center p-8 h-screen overflow-hidden">
      <div className="flex flex-col gap-8 max-w-3xl items-center h-full overflow-hidden">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-6xl font-extrabold text-cente">
            AI Recipes with DeepSeek
          </h1>
          <p className="text-xl">
            This app uses DeepSeek to provide recipe suggestions based on your
            ingredients. Simply enter what you have, and get a delicious recipe
            idea!
          </p>
        </div>

        <DeepSeekChat />
      </div>
    </main>
  );
}
