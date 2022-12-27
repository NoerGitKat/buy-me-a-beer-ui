import Head from "next/head";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thanks bro!</title>
        <meta name="description" content="Buy me a coffee clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center gap-20 my-6">
        <h1>Thank you man! That is very kind of you.</h1>
      </main>
    </>
  );
}
