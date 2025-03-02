import { api } from "~/trpc/server";

export default async function HomePage() {
  // You can await this here if you don't want to show Suspense fallback below
  const message = await api.auth.me();

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          welcome {message?.email}
        </h1>
      </div>
    </main>
  );
}
