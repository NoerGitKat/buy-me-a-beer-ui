import Head from "next/head";
import DonationForm from "../src/components/DonationForm";
import PrevDonations from "../src/components/PrevDonations";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buy Me A Beer</title>
        <meta name="description" content="Buy me a coffee clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center gap-20 my-6">
        <PrevDonations />
        <DonationForm />
      </main>
    </>
  );
}
