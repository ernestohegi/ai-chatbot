import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center text-gray-500">
      <p className="flex gap-2 justify-center">
        <span>&copy; {new Date().getFullYear()}</span>
        <Link href="https://ernestohegi.com" target="_blank" className="underline">
          Ernesto Hegi
        </Link>
      </p>
    </footer>
  );
}
