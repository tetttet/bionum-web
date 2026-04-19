import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 py-10 text-center sm:px-8">
        <div className="w-full max-w-2xl space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            BioNum
          </h1>

          <p className="text-sm leading-7 sm:text-base">
            BioNum is a modern numerology app with personal interpretations,
            daily insights, and general guidance for self-reflection. The
            content is provided for educational and entertainment purposes only
            and does not replace professional advice.
          </p>

          <div className="mx-auto flex w-full max-w-md flex-col gap-3 pt-2 sm:flex-row">
            <Link
              href="/terms-of-use"
              className="flex-1 border border-black px-4 py-3 text-sm font-medium"
            >
              Terms of Use
            </Link>

            <Link
              href="/privacy-policy"
              className="flex-1 border border-black px-4 py-3 text-sm font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
