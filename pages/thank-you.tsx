import Head from "next/head";
import Link from "next/link";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thanks bro!</title>
        <meta name="description" content="Buy me a coffee clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex flex-col items-center gap-4 max-w-sm m-auto mt-10">
          <Link href="/">
            <strong>👈 Go Home</strong>
          </Link>
          <h1>Thank you! That is so kind of you.</h1>
        </section>
      </main>
    </>
  );
}
