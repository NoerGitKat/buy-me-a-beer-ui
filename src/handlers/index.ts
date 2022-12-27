import { NextRouter } from "next/router";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { TDonationResponse } from "../../types";

export async function handleCheckout(
  event: FormEvent<HTMLFormElement>,
  quantity: number,
  name: string,
  message: string,
  setError: Dispatch<SetStateAction<string>>,
  router: NextRouter,
) {
  event.preventDefault();
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity, name, message }),
    });

    const { ok, error, url } = await res.json();

    if (!ok) {
      setError(error);
    }

    router.push(url);
  } catch (error) {
    console.error("Error!", error);
  }
}

export async function fetchDonations() {
  try {
    const response = await fetch("/api/donations", {
      method: "GET",
    });

    const donations = (await response.json()) as TDonationResponse;

    return donations;
  } catch (error) {
    console.error("Couldn't fetch donations from server!", error);
  }
}
