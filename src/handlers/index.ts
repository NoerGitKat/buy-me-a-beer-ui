import { NextRouter } from "next/router";
import { Dispatch, FormEvent, SetStateAction } from "react";

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
  } catch (error) {}
}
