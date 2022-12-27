import { GetServerSideProps } from "next";
import Head from "next/head";
import DonationForm from "../src/components/DonationForm";
import PrevDonations from "../src/components/PrevDonations";
import { TDonationResponse } from "../types";

export default function Home({ donations }: { donations: TDonationResponse }) {
  return (
    <>
      <Head>
        <title>Buy Me A Beer</title>
        <meta name="description" content="Buy me a coffee clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col-reverse px-6 md:flex-row justify-center gap-6 md:gap-20 my-6">
        <PrevDonations donations={donations.records} />
        <DonationForm />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const protocol = context.req.headers["x-forwarded-proto"] || "http";
  const host = context.req.headers.host;

  const response = await fetch(`${protocol}://${host}/api/donations`);
  const donations = await response.json();

  return {
    props: { donations },
  };
};
