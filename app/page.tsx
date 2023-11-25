import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <nav className="space-x-8">
        <Link href="/about">About</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/favorites">Favorites</Link>
        <br />
      </nav>
      <h1 className="text-xl">Home Page</h1>
    </main>
  );
}
