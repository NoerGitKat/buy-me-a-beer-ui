// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getFromAirtable } from "./services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Message not allowed!" });

  try {
    const donations = await getFromAirtable();

    return res.status(200).json(donations);
  } catch (error) {
    console.error("Server Error!", error);
    return res
      .status(500)
      .json({ message: "Couldn't get donations from the database." });
  }
}
