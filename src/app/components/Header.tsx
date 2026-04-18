export default function Header() {
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <h1 className="text-5xl font-extrabold text-center">
        Your Friendly AI Assistant
      </h1>
      <p className="text-xl">
        This app uses DeepSeek&apos;s AI to provide concise and helpful answers.
      </p>
    </div>
  );
}
