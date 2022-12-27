import { AIRTABLE_API_KEY, AIRTABLE_APP_ID } from "../../../src/constants";
import { TDonationRecord } from "../../../types";

async function insertIntoAirtable({ name, message, amount }: TDonationRecord) {
  const endpoint = `https://api.airtable.com/v0/${AIRTABLE_APP_ID}/Donations`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
      body: JSON.stringify({
        records: [
          {
            fields: { name, message, amount },
          },
        ],
      }),
    });

    const res = await response.json();

    return res;
  } catch (error) {
    console.error("Error!", error);
    throw new Error(`Couldn't insert into Airtable: ${error}`);
  }
}

export default insertIntoAirtable;
