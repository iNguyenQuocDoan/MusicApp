import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
