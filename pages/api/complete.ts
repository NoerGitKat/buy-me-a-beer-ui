// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { buffer } from "micro";
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { STRIPE_API_KEY, STRIPE_WEBHOOK_SECRET } from "../../src/constants";
import { TStripeMetaData } from "../../types";

const stripe = new Stripe(STRIPE_API_KEY, {
  apiVersion: "2022-08-01",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Message not allowed!" });

  // Verify signature
  const signature = req.headers["stripe-signature"] as string;

  if (!signature) {
    return res.status(400).json({ message: "Missing signature!" });
  }

  let event: Stripe.Event;

  const buf = await buffer(req);

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      signature,
      STRIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    console.error("Error!", error);
    return res.status(400).json({ message: "Invalid signature!" });
  }

  const { metadata } = event.data.object as TStripeMetaData;

  return res.status(200).json({ message: "Checkout complete!" });
}
